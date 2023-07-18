//homepage
interface settings{
    theme: boolean;
    font:string;
}
//articles pages
interface settings{
    sidebar:boolean;
}
//comtact page
interface settings{
    external:boolean;
}
let usersettings:settings={
    theme:true,
    font:"open sans",
    sidebar:false,
    external:true
}