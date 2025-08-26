// 图片数据 - 包含长文本描述
const images = [
{
    src: "./img/ylswtdxt.avif",
    title: "医疗三维头戴系统",
    description: `
            <h3>型号</h3>
            <p>Medviewer M-00</p>

            <h3>产品特点及用途描述</h3>
            <p>丝滑连接所有手术室及诊疗室的可视医疗设备，做到一镜看全看清，并解锁医生的传统手术诊疗固定体式。</p>
    `
},
{
    src: "./img/wxfsq.avif",
    title: "无线发射器",
    description: `
            <h3>型号</h3>
            <p>Sniper S-00</p>

            <h3>产品特点及用途描述</h3>
            <p>使用加密频段高速无线传输技术，传输所需信息。</p>
    `
},
{
    src: "./img/wxjsq.avif",
    title: "无线接收器",
    description: `
            <h3>型号</h3>
            <p>Target T-00</p>

            <h3>产品特点及用途描述</h3>
            <p>接受来自无线发射器的信息，并解码后在镜上显示，同时，运行VIEW软件。</p>
    `
},
{
    src: "./img/bhjp.avif",
    title: "保护镜片",
    description: `
            <h3>型号</h3>
            <p>P-00</p>

            <h3>产品特点及用途描述</h3>
            <p>保护三维头戴系统内屏。</p>
    `
},
{
    src: "./img/jdbhjp.avif",
    title: "加大保护镜片",
    description: `
            <h3>型号</h3>
            <p>A-00</p>

            <h3>产品特点及用途描述</h3>
            <p>保护光机内屏，并可以保护部分面部防止飞溅，同时可安装一次性防护面罩。</p>
    `
},
{
    src: "./img/uvjp.avif",
    title: "UV镜片",
    description: `
            <h3>型号</h3>
            <p>U-00</p>

            <h3>产品特点及用途描述</h3>
            <p>在光固化治疗时保护眼睛。</p>
    `
},
{
    src: "./img/yymz.avif",
    title: "医用帽子",
    description: `
            <h3>型号</h3>
            <p>Ease Cap</p>

            <h3>产品特点及用途描述</h3>
            <p>配上专用头垫，轻松佩戴头戴系统。</p>
    `
},
{
    src: "./img/td.avif",
    title: "头带",
    description: `
            <h3>型号</h3>
            <p>无</p>

            <h3>产品特点及用途描述</h3>
            <p>配上专用头垫，轻松佩戴此头戴系统。</p>
    `
},
{
    src: "./img/etd.avif",
    title: "额头垫",
    description: `
            <h3>型号</h3>
            <p>无</p>

            <h3>产品特点及用途描述</h3>
            <p>两款不同款头垫，适合不同方式的舒适佩戴。</p>
    `
},
{
    src: "./img/njjp.avif",
    title: "内夹镜片",
    description: `
            <h3>型号</h3>
            <p>Glass</p>

            <h3>产品特点及用途描述</h3>
            <p>适合特殊视力的使用者。</p>
    `
},
{
    src: "./img/ld4spcsx.avif",
    title: "9.5m雷电4\r\n视频传输线",
    description: `
            <h3>型号</h3>
            <p>无</p>

            <h3>产品特点及用途描述</h3>
            <p>稳定而高速得传输视频及数字信息。</p>
    `
},
{
    src: "./img/bmxdb.avif",
    title: "表面消毒布",
    description: `
            <h3>型号</h3>
            <p>MC wipes</p>

            <h3>产品特点及用途描述</h3>
            <p>一擦一拭，轻松消毒，媲美卡瓦布。</p>
    `
},
{
    src: "./img/dphlfwq.avif",
    title: "多屏互联服务器",
    description: `
            <h3>型号</h3>
            <p>Train</p>

            <h3>产品特点及用途描述</h3>
            <p>多设备信息传送工作站，实现多人多设备同时使用。</p>
    `
},
{
    src: "./img/swslxt.avif",
    title: "三维摄录系统",
    description: `
            <h3>型号</h3>
            <p>Plus1D</p>

            <h3>产品特点及用途描述</h3>
            <p>普通显微镜秒变3D 数字显微镜。</p>
    `
},
{
    src: "./img/txwtp.avif",
    title: "碳纤维托盘",
    description: `
            <h3>型号</h3>
            <p>Plus1D</p>

            <h3>产品特点及用途描述</h3>
            <p>光学扫描、射线扫描全通用，特别在口腔印模扫描中大幅减少成像伪影，确保印模细节的无损还原。</p>
    `
},

{
    src: "./img/ymsmy.avif",
    title: "印模扫描仪",
    description: `
            <h3>型号</h3>
            <p>Autay R scan</p>

            <h3>产品特点及用途描述</h3>
            <p>一种用X射线微米级成像，扫描牙科印模的设备，能无死角捕捉细节并生成高精度数字模型。整个系统应对石膏模型的完全替代。</p>
    `
},
{
    src: "./img/vrzhjp.avif",
    title: "VR转换镜片（黑）",
    description: `
            <h3>型号</h3>
            <p>B-00</p>

            <h3>产品特点及用途描述</h3>
            <p>可以把AR显示头戴系统转换成VR显示。</p>
    `
},
{
    src: "./img/fjgjp.avif",
    title: "防激光镜片",
    description: `
            <h3>型号</h3>
            <p>无</p>

            <h3>产品特点及用途描述</h3>
            <p>在激光治疗时保护眼睛。</p>
    `
},
{
    src: "./img/ycxfhmz.avif",
    title: "一次性防护面罩",
    description: `
            <h3>型号</h3>
            <p>mask</p>

            <h3>产品特点及用途描述</h3>
            <p>通用型面罩，可以单独使用，也可以加载在头戴系统中。防雾、防飞溅，顶级品质。</p>
    `
}
];

let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');

// 打开Lightbox
function openLightbox(index) {

    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 关闭Lightbox
function closeLightbox() {

    lightbox.classList.remove('active');
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 切换图片
function changeSlide(direction) {

    currentIndex += direction;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateLightbox(currentIndex);
}

// 更新Lightbox内容
function updateLightbox() {

    const image = images[currentIndex];
    lightboxImg.src = image.src;
    lightboxTitle.textContent = image.title;
    lightboxDescription.innerHTML = image.description;

    // 滚动到描述区域顶部
    lightboxDescription.scrollTop = 0;
}

// 点击Lightbox背景关闭
lightbox.addEventListener('click', function(e) {

    if (e.target === lightbox) {
        closeLightbox();
    }
});

// 键盘导航支持
document.addEventListener('keydown', function(e) {
    
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});