import { Product } from '../types';

export const products: Product[] = [
    {
        id: 'p-lnp-new',
        name: 'LNP-700 Extended Tactical Knee & Shin System',
        description: 'Engineered for maximum leg coverage, the LNP-700 provides seamless knee-to-shin protection without compromising mobility. Featuring an articulated dual-pivot system and high-density polymer plating, it ensures superior impact resistance against blunt force trauma and debris. The quick-release buckle system allows for rapid deployment in critical situations.',
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
            'Model: LNP-700 / Series-X'
        ],
        specs: { material: 'Impact Polymer / 1000D Nylon', weight: '320g', certification: 'EN1621-1:2012', impactRating: 'Level 2' }
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
        specs: { material: 'Polymer / EVA / Nylon', weight: '450g (Set)', certification: 'Tactical Standard', impactRating: 'High' }
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
            'High-density polyethylene (HDPE) caps',
            'Breathable sandwich mesh for comfort',
            'Adjustable hook-and-loop security straps',
            'Full 6-piece set (Knee, Elbow, Wrist)'
        ],
        specs: { material: 'HDPE / Mesh / Polyester', weight: '380g (Full Set)', certification: 'CE Junior', impactRating: 'Impact Resistant' }
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
        specs: { material: 'Ballistic Nylon / High-Density Foam', weight: '290g', certification: 'Street-Pro Grade', impactRating: 'Elite' }
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
        specs: { material: 'Gel Core / PVC Shell', weight: '210g', certification: 'Home & Professional', impactRating: 'Comfort Grade' }
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
        specs: { material: 'Bio-Foam / Polypropylene', weight: '550g (Set)', certification: 'CE EN1621', impactRating: 'Track Grade' }
    },
    {
        id: 'p-titan-shield',
        name: 'Titan-Shield Shin Guard',
        description: 'Advanced anti-collision shin protection built for high-impact environments. Features cold-resistant polymer plates and triple-strap security for absolute stability during intense operations and rough terrain navigation.',
        images: [
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
        specs: { material: 'Reinforced Polymer / Mesh', weight: '260g', certification: 'Tactical Class 1', impactRating: 'Collision Proof' }
    },
    {
        id: 'p-motocross-xtreme',
        name: 'Motocross X-Treme Guards',
        description: 'Heavy-duty joint protection for off-road enthusiasts. Ballistic-grade impact zones and ventilated cooling channels ensure peak performance and comfort in the most demanding trail conditions and high-jump landings.',
        images: [
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
        specs: { material: 'Advanced Composite / Nylon', weight: '420g', certification: 'Moto-X Standard', impactRating: 'X-Treme' }
    },
    {
        id: 'p-omni-sport',
        name: 'Omni-Sport Protection Kit',
        description: 'The ultimate multi-discipline safety solution. From motorcycling to professional skateboarding, this versatile set provides top-tier impact management and precision fit for all-terrain athletes and beginners alike.',
        images: [
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
        specs: { material: 'Multi-Polymer / Synthetic Fiber', weight: '340g', certification: 'Multi-Sport Standard', impactRating: 'Universal' }
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
        specs: { material: 'Carbon Fiber Hybrid', weight: '180g', certification: 'ISO 9001', impactRating: 'Level 2' }
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
        specs: { material: 'Leather / Carbon-Composite', weight: '150g', certification: 'CE EN1621', impactRating: 'Level 1' }
    },
    {
        id: 'p3',
        name: 'DNSG Pro Shin Guard',
        description: 'The DNSG Tactical Shin Guards provide stealthy, professional-grade protection for law enforcement and tactical teams. Constructed with a durable neoprene outer shell and reinforced stitching, these guards are designed to be silent, form-fitting, and exceptionally impact-resistant. They feature Grip-Tech™ non-slip technology for maximum durability and grip during high-intensity operations.',
        images: ['/assets/images/knee_pads_protector.jpg'],
        features: [
            'Stealthy durable neoprene outer shell with reinforced stitching',
            'Shock-absorbing 10mm closed-cell foam for silent operation',
            'Grip-Tech™ Non-slip reinforced grip technology on key impact zones',
            'Additional exterior padded protection in the shin section to deflect debris',
            'Multiple adjustable elastic straps and Velcro® closures for a secure fit',
            'Can be worn comfortably inside or outside of gear',
            'Ergonomic design for full range of motion',
            'Model: DNSG-B'
        ],
        specs: { material: 'Neoprene / TPU', weight: '240g', certification: 'ANSI/ISEA', impactRating: 'Level 3' }
    },
    {
        id: 'p4',
        name: 'Shell Knee Pads',
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
        specs: { material: 'Polymer / Nylon', weight: '220g', certification: 'CE Level 1', impactRating: 'Tactical Grade' }
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
        specs: { material: 'Soft EVA / High-Strength Polymer', weight: '280g', certification: 'EN1621-1 Level 1', impactRating: 'Pro-Flex Grade' }
    },
    {
        id: 'p-vanguard-system',
        name: 'Vanguard Road-Warrior Shin & Knee System',
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
        specs: { material: 'High-Impact Polymer / Soft Foam Core', weight: '420g', certification: 'CE EN1621-1', impactRating: 'Elite Road Grade' }
    }
];
