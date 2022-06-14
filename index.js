function newImage(url, leftSide, bottomSide){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = leftSide + 'px'
    object.style.bottom = bottomSide +'px'
    document.body.append(object)
    return object
}

function newItem(url, leftSide, bottomSide){
    let object = newImage(url, leftSide, bottomSide)

    object.addEventListener('dblclick', () => {
        object.remove()
    })/*my eventlistener isint functioning when double clicking on thew items*/
}
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/sword.png', 500, 405)
newImage("assets/sheild.png", 165, 185)/*shield is misspelled 
will cause it to break */
newImage('assets/staff.png', 600, 100)