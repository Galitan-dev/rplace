<script>
    import { PUBLIC_GITHUB_REPOSITORY } from "$env/static/public";
    import logo from "$lib/images/logo.png";
    import github from "$lib/images/github.png";
</script>

<header>
    <img src={logo} alt="r/place logo">
    <h1>r/place</h1>
    <a target="_blank" href={PUBLIC_GITHUB_REPOSITORY}><img src={github} alt="github logo"></a>
</header>

<style>
    header {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        background-color: #fff9;
        margin-bottom: 30px;
    }

    img {
        height: 35px;
    }
</style>
