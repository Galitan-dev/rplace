import { PUSHER_APP_ID, PUSHER_SECRET } from '$env/static/private';
import { PUBLIC_PUSHER_CLUSTER, PUBLIC_PUSHER_KEY } from '$env/static/public';
import Channels from 'pusher';
import * as database from "$lib/server/database.js";

export async function PUT({ request, params, cookies }) {
    let userid = cookies.get('userid');
    if (!userid) {
        userid = crypto.randomUUID();
        cookies.set('userid', userid, { path: '/' });
    }

    const lastPlacementDate = database.getLastPlacementDate(userid);
    const elapsed = Date.now() - lastPlacementDate.getTime();
    
    if (elapsed < 3000) {
        return new Response(null, { status: 420 });
    }

    const { colorIndex } = await request.json();
    const x = parseInt(params.x);
    const y = parseInt(params.y);

    if (isNaN(x) || isNaN(y) || typeof colorIndex !== 'number') {
        return new Response(null, { status: 400 });
    }

    try {
        database.setPixel(x, y, colorIndex);
    } catch {
        return new Response(null, { status: 404 });
    }

    database.setLastPlacementDate(userid, new Date());
    
    const channels = new Channels({
        appId: PUSHER_APP_ID,
        key: PUBLIC_PUSHER_KEY,
        secret: PUSHER_SECRET,
        cluster: PUBLIC_PUSHER_CLUSTER
    });

    await channels.trigger('pixels', 'pixel-change', { x, y, colorIndex });

    return new Response(null, { status: 204 });
}
