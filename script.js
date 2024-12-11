const translations = {
    zh: {
        title: "欢迎来到我的创意空间",
        nav: {
            about: "关于我",
            works: "作品展示"
        },
        hero: {
            heading: "探索创意的无限可能",
            subheading: "与我一起踏上AI创作的旅程！",
            cta: "查看作品"
        },
        about: {
            title: "关于我",
            subtitle: "AI创作者：技术与艺术的融合",
            content: "作为一名AI创作者，我致力于探索人工智能在创意领域的无限可能。我热衷于将最新的AI技术应用于写作、视觉艺术、视频制作、音频处理和动画创作中，以创造出既独特又引人入胜的作品。我的背景结合了对艺术的深刻理解和对技术的熟练掌握，使我能够为客户提供高质量的定制化服务。"
        },
        vision: {
            title: "远景目标",
            subtitle: "引领AI创作新潮流",
            content: "我的目标是成为AI创作领域的先锋，不断推动技术与艺术的融合。我渴望通过我的工作，为客户提供超出预期的创意解决方案，并在AI创作领域树立新的标杆。我期待与志同道合的创意人士和企业合作，共同探索AI在创意产业中的新应用。"
        },
        hobbies: {
            title: "爱好",
            subtitle: "艺术与技术的双重热爱",
            content: "在工作之余，我对艺术和技术的热爱也体现在我的个人爱好中。我喜欢研究最新的AI技术，探索它们在艺术创作中的新用途。同时，我也享受传统的艺术形式，如绘画和音乐，这些爱好让我能够从不同角度汲取灵感，丰富我的创作。"
        },
        works: {
            title: "作品展示",
            subtitle: "创意与技术的结晶",
            intro: "以下是我的一部分作品，它们展示了我在AI创作领域的专业技能和创新思维：",
            categories: {
                writing: {
                    title: "写作",
                    desc: "利用AI生成的文章和故事，涵盖各种主题和风格。"
                },
                images: {
                    title: "图片",
                    desc: "使用AI技术创作的图像作品，包括插画、设计和摄影。"
                },
                video: {
                    title: "视频",
                    desc: "展示我如何将AI技术应用于视频剪辑和特效制作。"
                },
                audio: {
                    title: "音频",
                    desc: "利用AI技术创作的音乐和声音设计作品。"
                },
                animation: {
                    title: "动画",
                    desc: "展示我如何将AI技术用于动画制作，创造出生动的角色和场景。"
                }
            }
        },
        footer: {
            copyright: "© 2023 我的创意空间"
        },
        langToggle: "EN"
    },
    en: {
        title: "Welcome to My Creative Space",
        nav: {
            about: "About",
            works: "Works"
        },
        hero: {
            heading: "Explore Infinite Creative Possibilities",
            subheading: "Join me on an AI-powered creative journey!",
            cta: "View Works"
        },
        about: {
            title: "About Me",
            subtitle: "AI Creator: Fusion of Technology and Art",
            content: "As an AI creator, I am dedicated to exploring the endless possibilities of artificial intelligence in creative fields. I am passionate about applying the latest AI technologies to writing, visual arts, video production, audio processing, and animation to create unique and engaging works. My background combines a deep understanding of art with technical expertise, enabling me to provide high-quality customized services to clients."
        },
        vision: {
            title: "Vision",
            subtitle: "Leading the New Wave of AI Creation",
            content: "My goal is to be a pioneer in the field of AI creation, continuously pushing the boundaries of technology and art integration. Through my work, I aspire to provide creative solutions that exceed expectations and set new benchmarks in AI creation. I look forward to collaborating with like-minded creatives and businesses to explore new applications of AI in the creative industry."
        },
        hobbies: {
            title: "Hobbies",
            subtitle: "Dual Passion for Art and Technology",
            content: "Beyond work, my love for art and technology is reflected in my personal hobbies. I enjoy researching the latest AI technologies and exploring their new applications in artistic creation. Additionally, I appreciate traditional art forms like painting and music, which allow me to draw inspiration from different perspectives and enrich my creative work."
        },
        works: {
            title: "Works",
            subtitle: "Crystallization of Creativity and Technology",
            intro: "Here are some of my works that showcase my professional skills and innovative thinking in AI creation:",
            categories: {
                writing: {
                    title: "Writing",
                    desc: "AI-generated articles and stories covering various themes and styles."
                },
                images: {
                    title: "Images",
                    desc: "AI-created visual works including illustrations, designs, and photography."
                },
                video: {
                    title: "Video",
                    desc: "Showcasing how I apply AI technology to video editing and special effects."
                },
                audio: {
                    title: "Audio",
                    desc: "Music and sound design works created using AI technology."
                },
                animation: {
                    title: "Animation",
                    desc: "Demonstrating how I use AI technology for animation, creating vivid characters and scenes."
                }
            }
        },
        footer: {
            copyright: "© 2023 My Creative Space"
        },
        langToggle: "中文"
    }
};

let currentLang = 'zh';

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateContent();
}

function updateContent() {
    const t = translations[currentLang];
    
    // Update document title and language
    document.title = t.title;
    document.documentElement.lang = currentLang;
    
    // Update header
    document.querySelector('header h1').textContent = t.title;
    document.querySelector('nav a[href="#about"]').textContent = t.nav.about;
    document.querySelector('nav a[href="#works"]').textContent = t.nav.works;
    
    // Update hero section
    document.querySelector('.hero-content h2').textContent = t.hero.heading;
    document.querySelector('.hero-content p').textContent = t.hero.subheading;
    document.querySelector('.hero-content .cta-button').textContent = t.hero.cta;
    
    // Update about section
    const aboutSection = document.querySelector('#about');
    aboutSection.querySelector('h2').textContent = t.about.title;
    aboutSection.querySelector('.subtitle').textContent = t.about.subtitle;
    aboutSection.querySelector('p:not(.subtitle)').textContent = t.about.content;
    
    // Update vision section
    const visionSection = document.querySelector('#vision');
    visionSection.querySelector('h2').textContent = t.vision.title;
    visionSection.querySelector('.subtitle').textContent = t.vision.subtitle;
    visionSection.querySelector('p:not(.subtitle)').textContent = t.vision.content;
    
    // Update hobbies section
    const hobbiesSection = document.querySelector('#hobbies');
    hobbiesSection.querySelector('h2').textContent = t.hobbies.title;
    hobbiesSection.querySelector('.subtitle').textContent = t.hobbies.subtitle;
    hobbiesSection.querySelector('p:not(.subtitle)').textContent = t.hobbies.content;
    
    // Update works section
    const worksSection = document.querySelector('#works');
    worksSection.querySelector('h2').textContent = t.works.title;
    worksSection.querySelector('.subtitle').textContent = t.works.subtitle;
    worksSection.querySelector('p:not(.subtitle)').textContent = t.works.intro;
    
    // Update work items
    const workItems = worksSection.querySelectorAll('.work-item');
    const categories = ['writing', 'images', 'video', 'audio', 'animation'];
    workItems.forEach((item, index) => {
        const category = categories[index];
        item.querySelector('h3').textContent = t.works.categories[category].title;
        item.querySelector('p').textContent = t.works.categories[category].desc;
    });
    
    // Update footer
    document.querySelector('footer p').textContent = t.footer.copyright;
    
    // Update language toggle button
    document.querySelector('.language-toggle').textContent = t.langToggle;
}

// Initialize language toggle button
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const langToggle = document.createElement('button');
    langToggle.className = 'language-toggle';
    langToggle.textContent = translations[currentLang].langToggle;
    langToggle.onclick = toggleLanguage;
    header.appendChild(langToggle);
});

// Make work items clickable
document.addEventListener('DOMContentLoaded', () => {
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const categories = ['writing', 'images', 'video', 'audio', 'animation'];
            window.location.href = `works/${categories[index]}.html`;
        });
    });
});
