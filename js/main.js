function updateCornerRadius() {
    const container = document.getElementById("grid");
    const boxes = Array.from(container.children);
    const gap = 10;
    const small_radius = "9px";
    const big_radius = "13px";

    const rects = boxes.map(box => box.getBoundingClientRect());

    boxes.forEach((box, i) => {
        const rect = rects[i];
        let topNeighbor = false;
        let bottomNeighbor = false;
        let leftNeighbor = false;
        let rightNeighbor = false;

        for (let j = 0; j < rects.length; j++) {
            if (i === j) continue;
            const oRect = rects[j];

            if (Math.abs(oRect.bottom - rect.top) <= gap) topNeighbor = true;
            if (Math.abs(oRect.top - rect.bottom) <= gap) bottomNeighbor = true;
            if (Math.abs(oRect.right - rect.left) <= gap) leftNeighbor = true;
            if (Math.abs(oRect.left - rect.right) <= gap) rightNeighbor = true;

            if (topNeighbor && bottomNeighbor && leftNeighbor && rightNeighbor) break;
        }

        box.style.borderTopLeftRadius = (leftNeighbor || topNeighbor) ? small_radius : big_radius;
        box.style.borderTopRightRadius = (rightNeighbor || topNeighbor) ? small_radius : big_radius;
        box.style.borderBottomLeftRadius = (leftNeighbor || bottomNeighbor) ? small_radius : big_radius;
        box.style.borderBottomRightRadius = (rightNeighbor || bottomNeighbor) ? small_radius : big_radius;
    });
}

window.addEventListener("resize", updateCornerRadius);
window.addEventListener("load", updateCornerRadius);

const boxes = document.querySelectorAll('.grid_box');

boxes[0].addEventListener('click', () => {
    window.location.href = 'about.html';
});

boxes[1].addEventListener('click', () => {
    window.location.href = 'hobbies.html';
});

boxes[2].addEventListener('click', () => {
    window.location.href = 'contact.html';
});
