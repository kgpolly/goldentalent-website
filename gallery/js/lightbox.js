// 图片数据 - 包含长文本描述
const products = {
    ylswtdxt: {
        title: "医疗三维头戴系统",
        images: [
            "./img/ylswtdxt.avif",
            "./img/nopic.avif",
            "./img/nopic.avif",
            "./img/nopic.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>Medviewer M-00</p>

            <h3>产品特点及用途描述</h3>
            <p>丝滑连接所有手术室及诊疗室的可视医疗设备，做到一镜看全看清，并解锁医生的传统手术诊疗固定体式。</p>
        `
    },
    wxfsq: {
        title: "无线发射器",
        images: [
            "./img/wxfsq.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>Sniper S-00</p>

            <h3>产品特点及用途描述</h3>
            <p>使用加密频段高速无线传输技术，传输所需信息。</p>
        `
    },
    wxjsq: {
        title: "无线接收器",
        images: [
            "./img/wxjsq.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>Target T-00</p>

            <h3>产品特点及用途描述</h3>
            <p>接受来自无线发射器的信息，并解码后在镜上显示，同时，运行VIEW软件。</p>
        `
    },
    bhjp: {
        title: "保护镜片",
        images: [
            "./img/bhjp.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>P-00</p>

            <h3>产品特点及用途描述</h3>
            <p>保护三维头戴系统内屏。</p>
        `
    },
    jdbhjp: {
        title: "加大保护镜片",
        images: [
            "./img/jdbhjp.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>A-00</p>

            <h3>产品特点及用途描述</h3>
            <p>保护光机内屏，并可以保护部分面部防止飞溅，同时可安装一次性防护面罩。</p>
        `
    },
    uvjp: {
        title: "UV镜片",
        images: [
            "./img/uvjp.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>U-00</p>

            <h3>产品特点及用途描述</h3>
            <p>在光固化治疗时保护眼睛。</p>
        `
    },
    yymz: {
        title: "医用帽子",
        images: [
            "./img/yymz.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>Ease Cap</p>

            <h3>产品特点及用途描述</h3>
            <p>配上专用头垫，轻松佩戴头戴系统。</p>
        `
    },
    td: {
        title: "头带",
        images: [
            "./img/td.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>无</p>

            <h3>产品特点及用途描述</h3>
            <p>配上专用头垫，轻松佩戴此头戴系统。</p>
        `
    },
    etd: {
        title: "额头垫",
        images: [
            "./img/etd.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>无</p>

            <h3>产品特点及用途描述</h3>
            <p>两款不同款头垫，适合不同方式的舒适佩戴。</p>
        `
    },
    njjp: {
        title: "内夹镜片",
        images: [
            "./img/njjp.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>Glass</p>

            <h3>产品特点及用途描述</h3>
            <p>适合特殊视力的使用者。</p>
        `
    },
    ld4spcsx: {
        title: "9.5m雷电4\\r\\n视频传输线",
        images: [
            "./img/ld4spcsx.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>无</p>

            <h3>产品特点及用途描述</h3>
            <p>稳定而高速得传输视频及数字信息。</p>
        `
    },
    bmxdb: {
        title: "表面消毒布",
        images: [
            "./img/bmxdb.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>MC wipes</p>

            <h3>产品特点及用途描述</h3>
            <p>一擦一拭，轻松消毒，媲美卡瓦布。</p>
        `
    },
    dphlfwq: {
        title: "多屏互联服务器",
        images: [
            "./img/dphlfwq.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>Train</p>

            <h3>产品特点及用途描述</h3>
            <p>多设备信息传送工作站，实现多人多设备同时使用。</p>
        `
    },
    swslxt: {
        title: "三维摄录系统",
        images: [
            "./img/swslxt.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>Plus1D</p>

            <h3>产品特点及用途描述</h3>
            <p>普通显微镜秒变3D 数字显微镜。</p>
        `
    },
    txwtp: {
        title: "碳纤维托盘",
        images: [
            "./img/txwtp.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>Plus1D</p>

            <h3>产品特点及用途描述</h3>
            <p>光学扫描、射线扫描全通用，特别在口腔印模扫描中大幅减少成像伪影，确保印模细节的无损还原。</p>
        `
    },
    ymsmy: {
        title: "印模扫描仪",
        images: [
            "./img/ymsmy.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>Autay R scan</p>

            <h3>产品特点及用途描述</h3>
            <p>一种用X射线微米级成像，扫描牙科印模的设备，能无死角捕捉细节并生成高精度数字模型。整个系统应对石膏模型的完全替代。</p>
        `
    },
    vrzhjp: {
        title: "VR转换镜片（黑）",
        images: [
            "./img/vrzhjp.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>B-00</p>

            <h3>产品特点及用途描述</h3>
            <p>可以把AR显示头戴系统转换成VR显示。</p>
        `
    },
    fjgjp: {
        title: "防激光镜片",
        images: [
            "./img/fjgjp.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>无</p>

            <h3>产品特点及用途描述</h3>
            <p>在激光治疗时保护眼睛。</p>
        `
    },
    ycxfhmz: {
        title: "一次性防护面罩",
        images: [
            "./img/ycxfhmz.avif"
        ],
        description: `
            <h3>型号</h3>
            <p>mask</p>

            <h3>产品特点及用途描述</h3>
            <p>通用型面罩，可以单独使用，也可以加载在头戴系统中。防雾、防飞溅，顶级品质。</p>
        `
    },
};

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');

let currentProduct = null;
let currentIndex = 0;
let startX = 0;
let endX = 0;
let touchListenersAdded = false;

function initLightbox(productKey) {

    console.log(productKey);
    currentProduct = products[productKey];
    currentIndex = 0;
    const slider = document.getElementById('lightbox-slider');
    const thumbnails = document.getElementById('lightbox-thumbnails');

    // 清空现有内容
    slider.innerHTML = '';
    thumbnails.innerHTML = '';
    lightboxDescription.innerHTML = '';
    console.log(currentProduct)
    // 添加幻灯片和缩略图
    currentProduct.images.forEach((imageUrl, index) => {
        // 创建幻灯片
        const slide = document.createElement('div');
        slide.className = 'lightbox-slide';
        slide.innerHTML = `<img src="${imageUrl}" alt="${currentProduct.title}" loading="lazy">`;
        slider.appendChild(slide);

        // 创建缩略图
        const thumb = document.createElement('img');
        thumb.className = 'lightbox-thumb';
        /*thumb.src = imageUrl + "?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80";*/
        thumb.src = imageUrl + "";
        thumb.alt = currentProduct.title;
        thumb.dataset.index = index;

        // 设置第一个缩略图为激活状态
        if (index === 0) {
            thumb.classList.add('active');
        }

        thumb.addEventListener('click', () => {
            goToSlide(index);
        });

        thumbnails.appendChild(thumb);
    });

    // 更新标题和描述
    lightboxTitle.textContent = currentProduct.title;
    lightboxDescription.innerHTML = currentProduct.description;
    // 重置幻灯片位置
    slider.style.transform = `translateX(0)`;
}

// 打开Lightbox
function openLightbox(productKey) {

    //currentIndex = index;
    initLightbox(productKey);
    //updateLightbox();
    updateLightboxContent();
    lightbox.classList.add('active');
    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden';

    if (!touchListenersAdded) {
        const slider = document.getElementById('lightbox-slider');
        slider.addEventListener('touchstart', handleTouchStart, false);
        slider.addEventListener('touchmove', handleTouchMove, false);
        slider.addEventListener('touchend', handleTouchEnd, false);
        touchListenersAdded = true;
    }
}

// 关闭Lightbox
function closeLightbox() {

    lightbox.classList.remove('active');
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
    // 重置状态
    currentProduct = null;
    currentIndex = 0;
}

// 切换图片
function changeSlide(direction) {

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = currentProduct.images.length - 1;
    } else if (currentIndex >= currentProduct.images.length) {
        currentIndex = 0;
    }

    goToSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    const slider = document.getElementById('lightbox-slider');
    slider.style.transform = `translateX(-${index * 100}%)`;

    updateLightboxContent();
}

function updateLightboxContent() {

    document.getElementById('lightbox-counter').textContent = `${currentIndex + 1} / ${currentProduct.images.length}`;
    // 更新激活的缩略图
    document.querySelectorAll('.lightbox-thumb').forEach((thumb, index) => {
        if (index === currentIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
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

// 触摸事件处理
function handleTouchStart(e) {
    startX = e.touches[0].clientX;
}

function handleTouchMove(e) {
    endX = e.touches[0].clientX;
}

function handleTouchEnd() {
    if (startX - endX > 50) {
        // 向左滑动，下一张
        changeSlide(1);
    } else if (endX - startX > 50) {
        // 向右滑动，上一张
        changeSlide(-1);
    }
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