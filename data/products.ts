import { Product } from '../types';

export const products: Product[] = [
    {
        id: 'p-lnp-new',
        name: 'RM-110 Extended Tactical Knee & Shin Guard',
        description: 'Engineered for maximum leg coverage, the RM-110 provides seamless knee-to-shin protection without compromising mobility. Featuring an articulated dual-pivot system and high-density polymer plating, it ensures superior impact resistance against blunt force trauma and debris. The quick-release buckle system allows for rapid deployment in critical situations.',
        images: [
            '/assets/images/LNP_1.jpg',
            '/assets/images/LNP_2.jpg',
            '/assets/images/LNP_3.jpg',
            '/assets/images/LNP_4.jpg',
            '/assets/images/LNP_5.jpg',
            '/assets/images/LNP_6.jpg',
            '/assets/images/LNP_7.jpg'
        ],
        features: [
            'Articulated knee joint for unrestricted movement',
            'Full shin guard integration for extended coverage',
            'Quick-release buckle system for rapid don/doff',
            'Ventilated high-impact shell for breathability',
            'Moisture-wicking interior lining',
            'Anti-slip silicone grip lining',
            'Reinforced stitching at stress points',
            'Compatible with tactical pants and uniforms',
            'Model: RM-110 / Series-X'
        ],
        specs: {
            material: 'Copolymer Polypropylene (CP), Polypropylene (PP), Ethylene-vinyl acetate (EVA)',
            weight: '615 g',
            color: 'Enhanced Black',
            sport: 'Snowboarding, Cycling, Skateboarding',
            impactRating: 'Level 2'
        },
        status: 'In Stock'
    },
    {
        id: 'p-tactical-set',
        name: 'Elite Tactical Guard Set',
        description: 'A 4-piece comprehensive protection suite featuring high-impact polymer shells and dual-density EVA foam. Designed for rapid-response tactical scenarios, providing maximum joint safety without restricting movement. The set includes both knee and elbow guards for full extremity protection.',
        images: [
            '/products/p1_1.jpg',
            '/products/p1_2.jpg',
            '/products/p1_3.jpg',
            '/products/p1_4.jpg'
        ],
        features: [
            'Ballistic grade polymer outer shell',
            'Dual-density EVA foam for superior shock absorption',
            'Adjustable elastic straps for a secure, universal fit',
            'Quiet-strap technology for stealth operations',
            'Moisture-wicking mesh interior'
        ],
        specs: { material: 'Polypropylene / EVA', weight: '450g (Set)', color: 'Black', impactRating: 'High' },
        status: 'In Progress'
    },
    {
        id: 'p-junior-pro',
        name: 'Junior Pro Safety System',
        description: 'Multi-sport protective gear tailored for young athletes. Ultra-breathable mesh lining combined with shock-absorbent HDP caps ensures safety for cycling, skating, and scooter riding. Lightweight and designed to allow natural movement while providing maximum protection.',
        images: [
            '/products/p2_3.jpg',
            '/products/p2_1.jpg',
            '/products/p2_2.jpg',
            '/products/p2_4.jpg'
        ],
        features: [
            'Kid-specific ergonomic design',
            'Copolymer Polypropylene & Polypropylene protective caps',
            'Breathable sandwich mesh for comfort',
            'Adjustable hook-and-loop security straps',
            'Full 6-piece set (Knee, Elbow, Wrist)'
        ],
        specs: { material: 'Copolymer Polypropylene, Polypropylene', weight: '272g', color: 'Black', dimensions: '21*21*10 cm', sport: 'Cycling, Skateboarding, Ice Skating, Snowboarding', impactRating: 'Impact Resistant' },
        status: 'Out of Stock'
    },
    {
        id: 'p-aero-glide',
        name: 'Aero-Glide Impact Pads',
        description: 'Engineered for extreme gliding and street sports. These thickened anti-fall knee pads feature reinforced wrist support using advanced ballistic nylon and ergonomic pivot points for fearless performance. The thick padding provides unmatched landing safety.',
        images: [
            '/products/p3_5.jpg',
            '/products/p3_1.jpg',
            '/products/p3_2.jpg',
            '/products/p3_3.jpg',
            '/products/p3_4.jpg'
        ],
        features: [
            'Thickened 15mm impact foam',
            'Abrasion-resistant ballistic nylon shell',
            'Reinforced wrist splint integration',
            'Non-slip interior surface',
            'Rapid air-flow cooling design'
        ],
        specs: { material: 'Polypropylene (PP), Ethylene Vinyl Acetate (EVA)', weight: '550g', impactRating: 'Elite' },
        status: 'Coming Soon'
    },
    {
        id: 'p-terra-flow',
        name: 'Terra-Flow Gardening Kneels',
        description: 'Ergonomically designed for long hours in the landscape. Water-resistant, easy-to-clean outer shell with gel-integrated padding that distributes weight evenly across the knee joint. No-slip surface ensures stability on mud or grass.',
        images: [
            '/products/p4_1.jpg',
            '/products/p4_2.jpg',
            '/products/p4_3.jpg',
            '/products/p4_4.jpg'
        ],
        features: [
            'Core-Gel™ weight distribution technology',
            'Non-marring heavy duty shell',
            'Quick-snap single strap system',
            'Waterproof exterior for easy washing',
            'Extra-wide padding for joint stability'
        ],
        specs: { material: 'Gel, PVC and EVA', weight: '307g', color: 'Black', impactRating: 'Comfort Grade' },
        status: 'In Stock'
    },
    {
        id: 'p-stealth-rider',
        name: 'Stealth Rider Armor',
        description: 'Professional motorcycle protection kit. Featuring CE-certified elbow and knee guards with a streamline aerodynamic profile, designed to minimize drag while providing maximum abrasion resistance during high-speed transit.',
        images: [
            '/products/p5_1.jpg',
            '/products/p5_2.jpg',
            '/products/p5_3.jpg',
            '/products/p5_4.jpg'
        ],
        features: [
            'Aero-profile for reduced wind resistance',
            'CE-Certified impact protection',
            'Ventilated panels for cooling at speed',
            'Articulated joints for natural riding posture',
            'Reflective elements for night visibility'
        ],
        specs: { material: 'Copolymer Polypropylene (CP), Polypropylene (PP), Ethylene Vinyl Acetate (EVA)', weight: '700g', color: 'Black', impactRating: 'Track Grade' },
        status: 'Coming Soon'
    },
    {
        id: 'p-titan-shield',
        name: 'Titan-Shield Shin Guard',
        description: 'Advanced anti-collision shin protection built for high-impact environments. Features cold-resistant polymer plates and triple-strap security for absolute stability during intense operations and rough terrain navigation.',
        images: [
            '/products/p6_5.jpg',
            '/products/p6_1.jpg',
            '/products/p6_2.jpg',
            '/products/p6_3.jpg',
            '/products/p6_4.jpg'
        ],
        features: [
            'Multi-point impact dispersion architecture',
            'Cold-resistant polymer for extreme climates',
            'Triple-point elastic security system',
            'Extra-wide shin coverage',
            'Antibacterial interior fabric'
        ],
        specs: { material: 'Copolymer Polypropylene (CP), Polypropylene (PP), Ethylene-vinyl acetate (EVA)', weight: '325 g', color: 'Black', dimensions: '5*6 inches', impactRating: 'Collision Proof' },
        status: 'In Stock'
    },
    {
        id: 'p-motocross-xtreme',
        name: 'Motocross X-Treme Guards',
        description: 'Heavy-duty joint protection for off-road enthusiasts. Ballistic-grade impact zones and ventilated cooling channels ensure peak performance and comfort in the most demanding trail conditions and high-jump landings.',
        images: [
            '/products/p7_5.jpg',
            '/products/p7_1.jpg',
            '/products/p7_2.jpg',
            '/products/p7_3.jpg',
            '/products/p7_4.jpg'
        ],
        features: [
            'Impact-reactive polymer zones',
            'Max-Flow™ ventilation system',
            'Dual-pivot articulation for knee movement',
            'High-grip padding for bike control',
            'Reinforced shin extension'
        ],
        specs: { material: 'Copolymer Polypropylene', weight: '1000g', impactRating: 'X-Treme' },
        status: 'In Progress'
    },
    {
        id: 'p-omni-sport',
        name: 'Omni-Sport Protection Kit',
        description: 'The ultimate multi-discipline safety solution. From motorcycling to professional skateboarding, this versatile set provides top-tier impact management and precision fit for all-terrain athletes and beginners alike.',
        images: [
            '/products/p8_5.jpg',
            '/products/p8_1.jpg',
            '/products/p8_2.jpg',
            '/products/p8_3.jpg',
            '/products/p8_4.jpg'
        ],
        features: [
            'Versatile multi-plate protection design',
            'Universal ergonomic sizing',
            'Reinforced stress zones for durability',
            'Quick-dry interior for heavy sweat',
            'Compact storage integration'
        ],
        specs: { material: 'Composition of Copolymer Polypropylene (CoPP), EVA, TPU', weight: '500g', impactRating: 'Universal' },
        status: 'Coming Soon'
    },
    {
        id: 'p1',
        name: 'Hard Shell Tactical Knee Pads',
        description: 'Experience top-tier comfort and performance with the Tactical Pro DKP Knee Pads. Designed to give full range of motion in extreme tactical situations. Molded with non-slip, flexible thermoplastic polyurethane (TPU) plates, these knee pads deflect blows from flying debris and provide protection on hard surfaces. Made with high tenacity, air-textured professional-grade synthetic materials, these knee pads offer superior tear and abrasion resistance. They feature dual hook and loop straps with an ergonomic curved form and composed of closed cell foam that ensures excellent cushioning and shock protection. These knee pads are assured not to absorb and hold water.',
        images: ['/assets/images/elite_pro_guard_v3.avif'],
        features: [
            'Hard shell polyurethane thermoplastic non-slip caps for added durability',
            'Reinforced foam padding for optimal shock absorption and comfort',
            'Two adjustable elastic straps with Velcro and D-rings for secure and custom fit',
            'High tenacity, air-textured professional synthetic outer materials for superior abrasion and tear resistance',
            'Non-reflective tone-on-tone grommets with a dull finish for a sleek look',
            'Ergonomically curved form for enhanced comfort',
            'Interior name tags for personal identification',
            'Easily washable for maintenance',
            'One size fits all for convenience',
            'Sold as a pair',
            'Mfg# DKP-B'
        ],
        specs: { material: 'Carbon Fiber Hybrid', weight: '180g', impactRating: 'Level 2' },
        status: 'In Stock'
    },
    {
        id: 'p2',
        name: 'Defender Riot Control Gloves',
        description: 'Expertly engineered for high-risk operations such as civil disturbances and high-threat level situations. These gloves feature molded hard-shell carbon-composite on the knuckles and panels to effectively deflect blows and flying debris. Integrated foam-injected padding provides superior shock protection for the knuckles and wrist while maintaining ergonomic flexibility.',
        images: ['/assets/images/control_gloves_1.avif', '/assets/images/control_gloves_2.avif'],
        features: [
            'Molded hard-shell carbon-composite knuckles for maximum impact deflection',
            'Foam-injected padding for enhanced knuckle and wrist protection',
            'Durable leather shell with reinforced palms for superior longevity',
            'Double-reinforced stitching in high-stress areas',
            'Elasticized wrist with Velcro® closure for a secure, customized fit',
            'Inner lining of bonded breathable tricot for moisture management',
            'Designed specifically for riot control and high-risk inmate movement',
            'Model: Defender Series'
        ],
        specs: { material: 'Leather / PPU', weight: '250g', color: 'Black', impactRating: 'Level 1' },
        status: 'In Stock'
    },
    {
        id: 'p4',
        name: 'Shell Knee, Elbow and Wrist Protector',
        description: 'Professional-grade protection for high-intensity operations. These shell knee pads are engineered for maximum durability and comfort in all-terrain environments. Featuring a rugged high-impact shell and non-slip surfaces, they provide reliable safety for tactical personnel and law enforcement.',
        images: [
            '/assets/images/short-kneepad_1.jpg',
            '/assets/images/short-kneepad_2.jpg',
            '/assets/images/short-kneepad_3.jpg',
            '/assets/images/short-kneepad_4.jpg',
            '/assets/images/short-kneepad_5.jpg',
            '/assets/images/short-kneepad_6.jpg'
        ],
        features: [
            'High-impact resistant outer shell for maximum tactical protection',
            'Dual-strap system with secure hook-and-loop closures',
            'Ergonomic foam padding for extended wear comfort',
            'Non-slip grip surface for stability on various terrains',
            'Lightweight and breathable design',
            'Stealth black professional finish',
            'Reinforced stitching for extreme durability',
            'Model: SKP-95 / Pro-Shell'
        ],
        specs: { material: 'Composition of Copolymer Polypropylene (CoPP) and EVA', weight: '500g', impactRating: 'Tactical Grade' },
        status: 'Out of Stock'
    },
    {
        id: 'p-flex-guard',
        name: 'Tri-Segment Flex Tactical Protector',
        description: 'The Tri-Segment Flex Protector is the pinnacle of ergonomic impact management. Featuring a revolutionary three-point articulation system, it mimics the natural movement of the human knee for zero-latency mobility. Constructed with ultra-lightweight soft EVA core and high-impact polymer plating, it provides elite protection for high-speed transit and off-road activities.',
        images: [
            '/products/p9_1.jpg',
            '/products/p9_2.jpg',
            '/products/p9_3.jpg',
            '/products/p9_4.jpg',
            '/products/p9_5.jpg',
            '/products/p9_6.jpg',
            '/products/p9_7.jpg',
            '/products/p9_8.jpg'
        ],
        features: [
            'Tri-Segment articulated architecture for fluid motion',
            'Ergonomic flex-design matching limb geometry',
            'Dual-density soft EVA interior for pressure relief',
            'Advanced airflow channels for temperature regulation',
            'Quick-adjust security strap system'
        ],
        specs: { material: 'Polyester Thermoplastic Polyurethane (TPU), Ethylene Vinyl Acetate (EVA)', weight: '1150g', impactRating: 'Pro-Flex Grade' },
        status: 'Coming Soon'
    },
    {
        id: 'p-vanguard-system',
        name: 'Vanguard Road-Warrior Shin & Knee Armour',
        description: 'Engineered for the modern road warrior, the Vanguard system provides comprehensive lower-leg protection for high-speed motorcycling and extreme off-road terrain. Featuring a reinforced dual-hinge design and extended shin coverage, it ensures stability and impact resistance without sacrificing the agility required for performance riding.',
        images: [
            '/products/p10_1.jpg',
            '/products/p10_2.jpg',
            '/products/p10_3.jpg',
            '/products/p10_4.jpg',
            '/products/p10_5.jpg',
            '/products/p10_6.jpg',
            '/products/p10_7.jpg'
        ],
        features: [
            'Full-length shin and knee integrated protection',
            'Dual-hinge pivot system for natural leg extension',
            'Hard-shell polymer plating with impact-absorption core',
            'Adjustable triple-strap security for a custom fit',
            'Breathable mesh lining for long-distance comfort'
        ],
        specs: { material: 'Copolymer Polypropylene (CP), Polypropylene (PP), Ethylene-vinyl acetate (EVA)', weight: '650g', impactRating: 'Elite Road Grade' },
        status: 'In Progress'
    },
    {
        id: 'p-rm-6in1-set',
        name: 'RM 6-in-1 Guard Set',
        description: 'Adult/Kids Knee Pads Elbow Pads Wrist Guards 6-in-1 RM Protective Gear Set for Inline Roller Skating, Skateboarding, Scooter, BMX, etc. Provides full protection while making the protected part comfortable and breathable.',
        images: [
            '/products/p11_1.jpg',
            '/products/p11_2.jpg',
            '/products/p11_3.jpg'
        ],
        features: [
            'Made of durable PP shell and breathable Nylon sleeves',
            'Adjustable elastic straps to stretch with your movement',
            'Durable velcro to keep it in place without slipping off',
            'Ideal for Roller Skating, Skateboarding, Inline Skating, Cycling, Hover Boards, Penny Board, Scooter and more',
            'Pair of knee pads, elbow pads, and wrist guards'
        ],
        specs: { material: 'Nylon, PP Shell', weight: '0.4 kg', sport: 'Cycling, Skateboarding', impactRating: 'Impact Protection' },
        status: 'In Stock'
    },
    {
        id: 'p-rm-3in1-set',
        name: 'RM 3-in-1 Guard Set',
        description: 'Kids/Adult/Youth Knee and Elbow Pads with Wrist Guards RM Protective Gear Set for Skateboarding, Cycling, BMX Bike, Scooter, Skating, Riding. Made of high-quality EVA material and PP shell.',
        images: [
            '/products/p12_1.jpg',
            '/products/p12_2.jpg',
            '/products/p12_3.jpg',
            '/products/p12_4.jpg',
            '/products/p12_5.jpg',
            '/products/p12_6.jpg'
        ],
        features: [
            'Impact-resistant PP shell',
            'Generously padded with thick 9mm EVA material',
            'Skin-friendly fabric and breathable elastic cloth',
            'Provides comfort without restricting movement',
            'Comes complete with 2 elbow pads, 2 knee pads, and 2 wrist guards'
        ],
        specs: { material: 'Ethylene Vinyl Acetate (EVA), Plastic, Polyester, Polypropylene (PP)', weight: '0.28 kg', sport: 'Cycling, Skateboarding', impactRating: 'Superior Protection' },
        status: 'In Stock'
    },
    {
        id: 'p-rm-skate-set',
        name: 'RM Skate Guard Set',
        description: 'Adult/Youth Knee Pads and Elbow Pads Set, RM Wrist Guards Skateboarding Pads for Roller Skating. Perfect for numerous activities like skateboarding, roller skating, cycling, scootering, biking, longboarding, and more.',
        images: [
            '/products/p13_1.jpg',
            '/products/p13_2.jpg',
            '/products/p13_3.jpg',
            '/products/p13_4.jpg',
            '/products/p13_5.jpg',
            '/products/p13_6.jpg',
            '/products/p13_7.jpg'
        ],
        features: [
            'Includes 2 elbow pads, 2 knee pads, 2 wrist pads, and a dedicated storage bag',
            'Impact-resistant PP shell with thick 9mm EVA material for exceptional shock absorption',
            'Skin-friendly fabric with breathable elastic cloth on the back',
            'Adjustable with several elastic straps for a customizable fit',
            'Unparalleled safety for the knee, elbow, and wrist'
        ],
        specs: { material: 'Polypropylene (PP), EVA', weight: '0.59 kg', sport: 'Skateboarding', color: 'Black', impactRating: 'Heavy Duty' },
        status: 'In Stock'
    }
];
