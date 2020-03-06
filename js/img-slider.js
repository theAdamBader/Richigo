function shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    setTimeout(function() {
        if (boxes.length > 3) {
            tmpNode.classList.add("hide-box");
            boxes[3].className = "box move-to-position3-from-left";
        }
        boxes[1].className = "box move-to-position1-from-left";
        boxes[2].className = "box move-to-position2-from-left";
        boxes[0].remove();

        document.querySelector(".cards-container").appendChild(tmpNode);

    }, 500);

}

function shiftRight() {
    const boxes = document.querySelectorAll(".box");
    boxes[2].className = "box move-out-from-right";
    setTimeout(function() {
        const noOfCards = boxes.length;
        if (noOfCards > 2) {
            boxes[2].className = "box hide-box";
        }

        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("hide-box");
        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".cards-container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box move-to-position1-from-right";
        boxes[0].className = "box move-to-position2-from-right";
        boxes[1].className = "box move-to-position3-from-right";

    }, 500);

}