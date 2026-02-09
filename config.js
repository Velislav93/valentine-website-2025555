// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Поли",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Ще бъдеш ли моята Валентинка? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Харесваш ли ме?",                                    // First interaction
            yesBtn: "Да",                                             // Text for "Yes" button
            noBtn: "Не",                                               // Text for "No" button
            secretAnswer: "Не те харесвам, а те ОБИЧАМ! ❤️"           // Secret hover message
        },
        second: {
            text: "Колко точно ме обичаш?",                          // For the love meter
            startText: "Толкова Много!",                                   // Text before the percentage
            nextBtn: "Напред ❤️"                                         // Text for the next button
        },
        third: {
            text: "Ще бъдеш ли моята Валентинка тази година? 🤗🌹", // The big question!
            yesBtn: "Ммм ДАА",                                             // Text for "Yes" button
            noBtn: "Ще си помисля.."                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "УАААААУ ТОЛКОВА МНОГООО?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "До безкраййй! 🚀💝",              // Shows when they go past 1000%
        normal: "Стига толкова, а? 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Йееей Аз съм най-големия Щастливец! 🎉💝💖💝💓",
        message: "Ела и си вземи подаръка с голяяма прегръдка и целувкии!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#FCF5EE",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#FFC4C4",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#EE6983",     // Button color (should stand out against the background)
        buttonHover: "#850E35",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/drq4gnbyy/video/upload/v1770666606/05_Imagine_Dragons_-_On_Top_of_The_World_iwrn6w.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
