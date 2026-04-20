// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function checkReveal() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", checkReveal);
checkReveal();


// DOWNLOAD
function downloadFile() {
    const link = document.createElement("a");
    link.href = "./optimize-win11.zip";
    link.download = "Win11_Optimizer.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// PARTICLES PRO
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

const mouse = {
    x: null,
    y: null
};

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
            p.x -= dx * 0.01;
            p.y -= dy * 0.01;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.35)";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();