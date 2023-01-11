var theme_back = document.getElementsByClassName("theme_back");
var theme_one = document.getElementsByClassName("theme_one");
var theme_two = document.getElementsByClassName("theme_two");
var theme_three = document.getElementsByClassName("theme_three");
var theme_one_v = document.getElementsByClassName("theme_one_v");
function lxy_theme_get(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        lxy_theme_rec = 0;
    }
    else{
        lxy_theme_rec = 1;
    }
}
function lxy_theme_change(){
    if(lxy_theme_rec==1){
        console.log("day mode");
        lxy_light();
    }
    else if(lxy_theme_rec==0){
        console.log("night mode");
        lxy_dark();
    }
    else{
        console.log("theme change error");
    }
}
function lxy_light(){
    if(theme_back){
        for(var nb = 0; nb < theme_back.length; nb++){
            var pb = theme_back[nb];
            pb.style.backgroundColor = "#f2f2f2";
        }
    }
    if(theme_one){
        for(var no = 0; no < theme_one.length; no++){
            var po = theme_one[no];
            po.style.color = "#000";
        }
    }
    if(theme_two){
        for(var nt = 0; nt < theme_two.length; nt++){
            var pt = theme_two[nt];
            pt.style.color = "#2f2f2fee";
        }
    }
    if(theme_three){
        for(var nr = 0; nr < theme_three.length; nr++){
            var pr = theme_three[nr];
            pr.style.color = "#000";
        }
    }
    if(theme_one_v){
        for(var nov = 0; nov < theme_one_v.length; nov++){
            var pov = theme_one_v[no];
            pov.style.color = "#f2f2f2";
        }
    }
}
function lxy_dark(){
    if(theme_back){
        for(var nb = 0; nb < theme_back.length; nb++){
            var pb = theme_back[nb];
            pb.style.backgroundColor = "#2f2f2f";
        }
    }
    if(theme_one){
        for(var no = 0; no < theme_one.length; no++){
            var po = theme_one[no];
            po.style.color = "#f2f2f2";
        }
    }
    if(theme_two){
        for(var nt = 0; nt < theme_two.length; nt++){
            var pt = theme_two[nt];
            pt.style.color = "#f2f2f2ee";
        }
    }
    if(theme_three){
        for(var nr = 0; nr < theme_three.length; nr++){
            var pr = theme_three[nr];
            pr.style.color = "#f2f2f2aa";
        }
    }
    if(theme_one_v){
        for(var nov = 0; nov < theme_one_v.length; nov++){
            var pov = theme_one_v[no];
            pov.style.color = "#2f2f2f";
        }
    }
}
function lxy_theme_js(){
    lxy_theme_get();
    lxy_theme_change();
}
