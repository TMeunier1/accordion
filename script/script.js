// var articleCacheElements = document.getElementsByClassName('cache');
// var sectionClickElements = document.getElementsByClassName('clickablesection')
// var currentClass = articleCacheElements.className;
// function toggle(element){
//     for(var i = 0; i < articleCacheElements.length i++){
//         if(currentClass = "cache"){
//             articleCacheElements.className = "affiche";
//         }
//         else{
//             articleCacheElements.className = "cache";
//         }
//     };
// };

function toggle(element){
    var sections = document.getElementsByClassName('uncollapse');
    for(var i = 0; i < sections.length; i++){
        sections[i].className = "collapse";
    }

    element.className = "uncollapse";
};

// Quand on clique sur section :
//     -si article caché, l'afficher
//     -si article affiché, le cacher
//     -quand clique sur autre article, masquer article qui n'est plus actif
