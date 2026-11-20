import type { BlogPost } from '@/types';

// Keep these paths literal so the GitHub Pages export can prefix every asset.
// Source and license records are maintained in public/blog/image-sources.json.
export const blogImages: Record<string, Pick<BlogPost, 'image' | 'imageAlt' | 'imageCredit'>> = {
    'generative-ai-cybersecurity-learning-journey': {
        image: '/blog/ai-cybersecurity.jpg',
        imageAlt: 'An illustrated AI processor surrounded by violet and turquoise circuitry.',
        imageCredit: {
            name: 'Omar:. Lopez-Rincon',
            url: 'https://unsplash.com/photos/an-ai-chip-on-a-circuit-board-sNt81Whsncg',
        },
    },
    'cybersecurity-assessment-security-plus-cysa': {
        image: '/blog/security-assessment.jpg',
        imageAlt: 'A close-up of syntax-highlighted Python code on a computer screen.',
        imageCredit: {
            name: 'Chris Ried',
            url: 'https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-code-on-it-ieic5Tq8YMk',
        },
    },
    'cisco-ccna-specialization-learning-journey': {
        image: '/blog/ccna-data-center.jpg',
        imageAlt: 'Rows of server cabinets beneath overhead network cabling in a bright data center.',
        imageCredit: {
            name: 'Taylor Vick',
            url: 'https://unsplash.com/photos/server-room-with-network-cabinets-aWslrFhs1w4',
        },
    },
    'networking-fundamentals-network-access': {
        image: '/blog/network-fundamentals.jpg',
        imageAlt: 'Ethernet cables connected to rack-mounted network switches with illuminated status lights.',
        imageCredit: {
            name: 'Albert Stoynov',
            url: 'https://unsplash.com/photos/a-close-up-of-a-network-with-wires-connected-to-it-dyUp7WPu5q4',
        },
    },
    'cissp-specialization-security-perspective': {
        image: '/blog/cissp-security-infrastructure.jpg',
        imageAlt: 'Network equipment and cabling behind closed mesh server-cabinet doors.',
        imageCredit: {
            name: 'Taylor Vick',
            url: 'https://unsplash.com/photos/cable-network-M5tzZtFCOfs',
        },
    },
    'face-mask-detection-with-alarm': {
        image: '/blog/computer-vision.jpg',
        imageAlt: 'An outdoor video camera beneath a blue, cloud-filled sky.',
        imageCredit: {
            name: 'Nathy dog',
            url: 'https://unsplash.com/photos/white-security-camera-at-daytime-z1uDmJx3ZEQ',
        },
    },
};
