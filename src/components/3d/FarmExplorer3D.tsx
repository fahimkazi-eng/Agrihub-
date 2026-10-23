import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { ChevronUp, ChevronDown, Eye, CheckCircle2, AlertCircle, Sparkles, Layers } from 'lucide-react';

interface ZoneData {
  id: string;
  name: string;
  nameBn: string;
  pos: [number, number, number];
  targetPos: [number, number, number];
  status: string;
  statusBn: string;
  statusType: 'core' | 'conditional' | 'pilot';
  descriptionBn: string;
  systemRoleBn: string;
  inputsBn: string;
  outputsBn: string;
  connectionsBn: string;
}

const FARM_ZONES: ZoneData[] = [
  {
    id: 'broiler',
    name: 'Broiler Production',
    nameBn: 'ব্রয়লার মুরগি উৎপাদন শেড',
    pos: [-10, 0, -6],
    targetPos: [-8, 4, -4],
    status: 'Core Planning Scenario',
    statusBn: 'মূল পরিকল্পনা (~৫০০ মুরগি)',
    statusType: 'core',
    descriptionBn: 'পূর্ব-পশ্চিমমুখী বায়ু চলাচলবান্ধব আধুনিক শেড। তাপমাত্রা ব্রুডিং, ঝুলন্ত ফিডার-ড্রিংকার এবং কঠোর জৈবনিরাপত্তা মেনে মাংসের জন্য ব্রয়লার মুরগি পালন।',
    systemRoleBn: 'খামারের প্রধান খাদ্য উৎপাদন ও প্রাথমিক ক্যাশ-ফ্লো জেনারেশন ইউনিট।',
    inputsBn: '১ দিন বয়সী সুস্থ বাচ্চা, বাণিজ্যিক সুষম ফিড, শুকনো ধানের তুষ, বিশুদ্ধ গভীর নলকূপের পানি ও অনুমোদিত ভ্যাকসিন।',
    outputsBn: 'পরিপক্ক ব্রয়লার মাংসের মুরগি (১.৯ - ২.১ কেজি) এবং নাইট্রোজেনসমৃদ্ধ ব্যবহৃত পোলট্রি লিটার।',
    connectionsBn: 'উৎপাদিত লিটার সরাসরি কম্পোস্টিং ইয়ার্ডে পাঠানো হয়। কাঁচা বিষ্ঠা কখনোই সরাসরি পুকুরে ফেলা হয় না।',
  },
  {
    id: 'aquaculture',
    name: 'Aquaculture Pond',
    nameBn: 'মিঠাপানির মৎস্য চাষ পুকুর',
    pos: [10, 0, -5],
    targetPos: [8, 4, -3],
    status: 'Conditional Access Stream',
    statusBn: 'শর্তসাপেক্ষ কার্যক্রম (২ বছরের পারিবারিক মেয়াদ)',
    statusType: 'conditional',
    descriptionBn: 'বিদ্যমান পারিবারিক পুকুর, যেখানে তিনটি পরিবারের অংশীদারিত্ব এবং প্রত্যেকের জন্য ২ বছরের ব্যবহারের মেয়াদ নির্ধারিত। মেয়াদের ভেতর রুই, কাতলা ও মৃগেল মাছের সমন্বিত মিশ্র চাষ।',
    systemRoleBn: 'মৌসুমি আমিষ উৎপাদন ও পুকুর ইকোসিস্টেমের সদ্ব্যবহার।',
    inputsBn: 'বাছাইকৃত উন্নত পোনা, ভাসমান ফিড, কৃষি চুন ও পানির পরিবেশ কন্ডিশনার।',
    outputsBn: 'তাজা মিঠাপানির কার্প মাছ এবং শুকনো মৌসুমে তলদেশের পুষ্টিকর পলল মাটি।',
    connectionsBn: 'পুকুরের তলদেশ পরিষ্কার করার মাটি কম্পোস্ট মিশ্রণে ব্যবহৃত হয়।',
  },
  {
    id: 'compost',
    name: 'Resource Recovery Yard',
    nameBn: 'জৈব সম্পদ পুনরুদ্ধার ও কম্পোস্টিং',
    pos: [-8, 0, 8],
    targetPos: [-6, 3, 6],
    status: 'Active Development',
    statusBn: 'সক্রিয় উন্নয়ন',
    statusType: 'core',
    descriptionBn: 'পোলট্রি শেডের লিটার এবং ফসলের শুকনো অবশিষ্টাংশ মিশিয়ে অ্যারোবিক উইন্ডরো পদ্ধতিতে থার্মোফিলিক (৫৫-৬৫° সে.) তাপমাত্রায় জীবাণুমুক্ত নিরাপদ কম্পোস্ট উৎপাদন।',
    systemRoleBn: 'বর্জ্যকে পুষ্টিকর জৈব হিউমাসে রূপান্তর এবং সার্কুলার পুষ্টি চক্র বজায় রাখা।',
    inputsBn: 'ব্যবহৃত পোলট্রি লিটার, ধানের খড়, উদ্ভিজ্জ অবশিষ্টাংশ ও উপকারী ব্যাকটেরিয়াল কালচার।',
    outputsBn: 'পরিপক্ক গন্ধহীন জৈব সার ও কেঁচো সারের পুষ্টিকর ফিডস্টক।',
    connectionsBn: 'ব্রয়লার শেড থেকে লিটার গ্রহণ করে এবং পরিশোধিত কম্পোস্ট নার্সারিতে চারা তৈরিতে সরবরাহ করে।',
  },
  {
    id: 'nursery',
    name: 'Nursery & Seasonal Crops',
    nameBn: 'নার্সারি ও মৌসুমি ফসল',
    pos: [8, 0, 7],
    targetPos: [6, 3, 5],
    status: 'Active Development',
    statusBn: 'পরিকল্পিত উৎপাদন',
    statusType: 'core',
    descriptionBn: 'প্লাস্টিক প্লাগ ট্রেতে খামারের তৈরি কম্পোস্ট ও কোকোপিট মিডিয়া দিয়ে উন্নত জাতের সবজির চারা উৎপাদন এবং সীমিত জমিতে উচ্চমূল্যের মৌসুমি ফসলের চাষ।',
    systemRoleBn: 'স্থানীয় কৃষকদের সুস্থ চারা সরবরাহ এবং মাটির জীববৈচিত্র্য রক্ষা।',
    inputsBn: 'উচ্চফলনশীল সার্টিফাইড বীজ, পরিশোধিত কম্পোস্ট মিডিয়া, ট্রে ও পরিমিত সেচ।',
    outputsBn: 'সুস্থ শিকড়যুক্ত চারাগাছ (টমেটো, ফুলকপি, মরিচ) এবং তাজা মৌসুমি সবজি।',
    connectionsBn: 'কম্পোস্টিং ইউনিটের সার গ্রহণ করে এবং ফসলের অবশিষ্টাংশ কম্পোস্টে ফেরত দেয়।',
  },
  {
    id: 'bsf',
    name: 'Insect Bioconversion Pilot',
    nameBn: 'ব্ল্যাক সোলজার ফ্লাই বায়োকনভার্সন (গবেষণা)',
    pos: [0, 0, 10],
    targetPos: [0, 2.5, 7],
    status: 'Pilot Research Candidate',
    statusBn: 'পাইলট গবেষণা পর্যায়',
    statusType: 'pilot',
    descriptionBn: 'নির্দিষ্ট ও পরিচ্ছন্ন উদ্ভিজ্জ উচ্ছিষ্ট প্রক্রিয়াজাত করে ব্ল্যাক সোলজার ফ্লাই লার্ভার মাধ্যমে প্রোটিন বায়োমাস তৈরির প্রাথমিক বৈজ্ঞানিক গবেষণা।',
    systemRoleBn: 'বিকল্প প্রোটিন ও শূন্য বর্জ্য প্রযুক্তি অনুসন্ধানের পরীক্ষামূলক প্ল্যাটফর্ম।',
    inputsBn: 'বাছাইকৃত পরিচ্ছন্ন উদ্ভিজ্জ বর্জ্য ও ৫ দিন বয়সী বিএসএফ লার্ভা।',
    outputsBn: 'পরীক্ষাধীন লার্ভা বায়োমাস ও ফ্রাস (জৈব অবশিষ্টাংশ)।',
    connectionsBn: 'সবজি উচ্ছিষ্ট গ্রহণ করে এবং লার্ভা ফ্রাস কম্পোস্টিং ইউনিটে যুক্ত হয়। বাণিজ্যিক ছাড়ের আগে মানদণ্ড যাচাই অপরিহার্য।',
  },
  {
    id: 'farmos',
    name: 'FarmOS Digital Management Hub',
    nameBn: 'FarmOS প্রযুক্তি ও মনিটরিং স্টেশন',
    pos: [0, 0, -2],
    targetPos: [0, 3, 1],
    status: 'Core Planning Scenario',
    statusBn: 'ডিজিটাল কন্ট্রোল ও ডেটা সংরক্ষণ',
    statusType: 'core',
    descriptionBn: 'খামারের প্রতিটি কার্যক্রমের ডিজিটাল হিসাব রাখার বাংলা-বান্ধব সিস্টেম। ব্রয়লার ব্যাচের ওজন, ফিড ইনটেক, এফসিআর, পুকুরের প্যারামিটার এবং নগদ প্রবাহ ট্র্যাকিং।',
    systemRoleBn: 'পুরো খামার ইকোসিস্টেমের সিদ্ধান্ত গ্রহণ, খরচ নিয়ন্ত্রণ ও স্বচ্ছ হিসাবরক্ষণ।',
    inputsBn: 'দৈনিক শেড লগ, পানি পরীক্ষা ফলাফল, ইনভেন্টরি ও আর্থিক লেনদেনের তথ্য।',
    outputsBn: 'এফসিআর রিপোর্ট, ব্রেক-ইভেন অ্যানালাইসিস, স্টক ওয়ার্নিং ও পারফরম্যান্স মেট্রিকস।',
    connectionsBn: 'সকল উৎপাদন ইউনিটের সাথে সংযুক্ত থেকে বাস্তব ডেটার ভিত্তিতে সিদ্ধান্ত নিতে সহায়তা করে।',
  },
];

export const FarmExplorer3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeZone, setActiveZone] = useState<ZoneData>(FARM_ZONES[0]);
  const [isDockCollapsed, setIsDockCollapsed] = useState(false);
  const [cameraPreset, setCameraPreset] = useState<'overview' | 'focused'>('overview');
  const [webglSupported, setWebglSupported] = useState(true);

  // References to keep animation loop & Three.js instances stable
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameIdRef = useRef<number>(0);
  const isSoftwareGlRef = useRef<boolean>(false);
  const targetCameraPos = useRef<THREE.Vector3>(new THREE.Vector3(22, 18, 24));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  const selectZone = useCallback((zone: ZoneData) => {
    setActiveZone(zone);
    setCameraPreset('focused');
    // Calculate focused camera position offset from zone
    targetCameraPos.current.set(
      zone.pos[0] + 8,
      zone.pos[1] + 8,
      zone.pos[2] + 10
    );
    targetLookAt.current.set(zone.pos[0], zone.pos[1] + 1, zone.pos[2]);
  }, []);

  const resetToOverview = useCallback(() => {
    setCameraPreset('overview');
    targetCameraPos.current.set(22, 18, 24);
    targetLookAt.current.set(0, 0, 0);
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL
    const checkSoftwareGl = () => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2') || document.createElement('canvas').getContext('webgl');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : (gl as WebGLRenderingContext).RENDERER;
        const gpu = String((gl as WebGLRenderingContext).getParameter(param));
        (gl as WebGLRenderingContext).getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    };

    const isSoftwareGl = checkSoftwareGl();
    isSoftwareGlRef.current = isSoftwareGl;

    // Verify WebGL can initialize
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        powerPreference: 'high-performance',
        alpha: false,
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0D1F18');
    scene.fog = new THREE.FogExp2('#0D1F18', 0.015);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.5,
      150
    );
    camera.position.set(22, 18, 24);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Balanced Lighting Rig
    const hemiLight = new THREE.HemisphereLight('#8BC49E', '#102820', 0.85);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight('#FFF5DE', 1.25);
    dirLight.position.set(20, 30, 15);
    dirLight.castShadow = !isSoftwareGl;
    if (dirLight.shadow) {
      dirLight.shadow.mapSize.width = 1024;
      dirLight.shadow.mapSize.height = 1024;
      dirLight.shadow.camera.near = 10;
      dirLight.shadow.camera.far = 70;
      const d = 25;
      dirLight.shadow.camera.left = -d;
      dirLight.shadow.camera.right = d;
      dirLight.shadow.camera.top = d;
      dirLight.shadow.camera.bottom = -d;
      dirLight.shadow.bias = -0.0005;
    }
    scene.add(dirLight);

    // Fill rim light
    const rimLight = new THREE.DirectionalLight('#55B9B0', 0.4);
    rimLight.position.set(-20, 15, -15);
    scene.add(rimLight);

    // ==========================================
    // PROCEDURAL 3D FARM LANDSCAPE & OBJECTS
    // ==========================================

    // 1. Terrain Ground
    const groundGeo = new THREE.PlaneGeometry(60, 60, 32, 32);
    const groundMat = new THREE.MeshStandardMaterial({
      color: '#14382B',
      roughness: 0.85,
      metalness: 0.05,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = !isSoftwareGl;
    scene.add(ground);

    // Pathways network connecting units
    const pathMat = new THREE.MeshStandardMaterial({
      color: '#5C402E',
      roughness: 0.9,
    });
    
    // Main cross paths
    const pathH = new THREE.Mesh(new THREE.PlaneGeometry(36, 2.5), pathMat);
    pathH.rotation.x = -Math.PI / 2;
    pathH.position.set(0, 0.02, 0);
    scene.add(pathH);

    const pathV = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 36), pathMat);
    pathV.rotation.x = -Math.PI / 2;
    pathV.position.set(0, 0.02, 0);
    scene.add(pathV);

    // Helper to create procedural units
    // ------------------------------------------
    // A. Broiler Shed (Position: -10, 0, -6)
    // ------------------------------------------
    const broilerGroup = new THREE.Group();
    broilerGroup.position.set(-10, 0, -6);

    // Base concrete slab
    const shedSlab = new THREE.Mesh(
      new THREE.BoxGeometry(10, 0.3, 6),
      new THREE.MeshStandardMaterial({ color: '#8E9B95', roughness: 0.7 })
    );
    shedSlab.position.y = 0.15;
    shedSlab.receiveShadow = !isSoftwareGl;
    broilerGroup.add(shedSlab);

    // Main walls with ventilation openings
    const shedWallMat = new THREE.MeshStandardMaterial({ color: '#D9D4C7', roughness: 0.5 });
    const endWall1 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.2, 5.8), shedWallMat);
    endWall1.position.set(-4.8, 1.3, 0);
    const endWall2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.2, 5.8), shedWallMat);
    endWall2.position.set(4.8, 1.3, 0);
    broilerGroup.add(endWall1, endWall2);

    // Side mesh pillars
    const pillarMat = new THREE.MeshStandardMaterial({ color: '#5A635F', roughness: 0.3 });
    for (let x = -4; x <= 4; x += 2) {
      const p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.2), pillarMat);
      p1.position.set(x, 1.3, -2.8);
      const p2 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.2), pillarMat);
      p2.position.set(x, 1.3, 2.8);
      broilerGroup.add(p1, p2);
    }

    // Ventilated pitched roof
    const roofMat = new THREE.MeshStandardMaterial({ color: '#2B4A3E', roughness: 0.4, metalness: 0.3 });
    const roofLeft = new THREE.Mesh(new THREE.BoxGeometry(10.4, 0.15, 3.4), roofMat);
    roofLeft.position.set(0, 2.8, -1.4);
    roofLeft.rotation.x = 0.35;
    roofLeft.castShadow = !isSoftwareGl;
    const roofRight = new THREE.Mesh(new THREE.BoxGeometry(10.4, 0.15, 3.4), roofMat);
    roofRight.position.set(0, 2.8, 1.4);
    roofRight.rotation.x = -0.35;
    roofRight.castShadow = !isSoftwareGl;
    broilerGroup.add(roofLeft, roofRight);

    // Feed Silo
    const siloMat = new THREE.MeshStandardMaterial({ color: '#BDC7C2', metalness: 0.6, roughness: 0.25 });
    const siloCyl = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 3.2, 16), siloMat);
    siloCyl.position.set(-4.2, 2.4, 3.6);
    const siloCone = new THREE.Mesh(new THREE.ConeGeometry(0.9, 0.8, 16), siloMat);
    siloCone.position.set(-4.2, 4.4, 3.6);
    broilerGroup.add(siloCyl, siloCone);

    scene.add(broilerGroup);

    // ------------------------------------------
    // B. Freshwater Aquaculture Pond (Position: 10, 0, -5)
    // ------------------------------------------
    const pondGroup = new THREE.Group();
    pondGroup.position.set(10, 0, -5);

    // Embankment Ring
    const bankMat = new THREE.MeshStandardMaterial({ color: '#3A5C43', roughness: 0.9 });
    const bank = new THREE.Mesh(new THREE.CylinderGeometry(5.4, 6.2, 0.5, 24), bankMat);
    bank.position.y = 0.25;
    pondGroup.add(bank);

    // Water Surface
    const waterMat = new THREE.MeshStandardMaterial({
      color: '#348E85',
      roughness: 0.1,
      metalness: 0.3,
      transparent: true,
      opacity: 0.88,
    });
    const water = new THREE.Mesh(new THREE.CylinderGeometry(5.0, 5.0, 0.1, 24), waterMat);
    water.position.y = 0.4;
    pondGroup.add(water);

    // Bamboo Inspection Jetty
    const woodMat = new THREE.MeshStandardMaterial({ color: '#73513A', roughness: 0.8 });
    const jetty = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.15, 3.5), woodMat);
    jetty.position.set(0, 0.5, 2.8);
    pondGroup.add(jetty);

    scene.add(pondGroup);

    // ------------------------------------------
    // C. Resource Recovery & Composting (Position: -8, 0, 8)
    // ------------------------------------------
    const compostGroup = new THREE.Group();
    compostGroup.position.set(-8, 0, 8);

    // Concrete Pad
    const pad = new THREE.Mesh(
      new THREE.BoxGeometry(8, 0.2, 7),
      new THREE.MeshStandardMaterial({ color: '#5A615D', roughness: 0.9 })
    );
    pad.position.y = 0.1;
    compostGroup.add(pad);

    // 3 Aerated Compost Windrow Heaps
    const heapColors = ['#4A3324', '#5A3E2C', '#3A281C'];
    for (let i = 0; i < 3; i++) {
      const heapMat = new THREE.MeshStandardMaterial({ color: heapColors[i], roughness: 0.95 });
      const heap = new THREE.Mesh(new THREE.ConeGeometry(1.2, 1.4, 8), heapMat);
      heap.scale.set(1.1, 1.0, 2.6);
      heap.position.set(-2.2 + i * 2.2, 0.7, 0);
      heap.castShadow = !isSoftwareGl;
      compostGroup.add(heap);
    }

    // Aeration / Shed Roof shelter
    const shelterRoof = new THREE.Mesh(
      new THREE.BoxGeometry(8.4, 0.1, 7.4),
      new THREE.MeshStandardMaterial({ color: '#6A7D75', roughness: 0.5 })
    );
    shelterRoof.position.set(0, 3.0, 0);
    compostGroup.add(shelterRoof);

    // Shelter posts
    for (const sx of [-3.8, 3.8]) {
      for (const sz of [-3.3, 3.3]) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.0), pillarMat);
        post.position.set(sx, 1.5, sz);
        compostGroup.add(post);
      }
    }

    scene.add(compostGroup);

    // ------------------------------------------
    // D. Nursery & Crops (Position: 8, 0, 7)
    // ------------------------------------------
    const nurseryGroup = new THREE.Group();
    nurseryGroup.position.set(8, 0, 7);

    // Greenhouse hoops & base
    const nurseryBase = new THREE.Mesh(
      new THREE.BoxGeometry(7, 0.3, 6),
      new THREE.MeshStandardMaterial({ color: '#5B4030', roughness: 0.8 })
    );
    nurseryBase.position.y = 0.15;
    nurseryGroup.add(nurseryBase);

    // Greenhouse Arch Cover
    const ghCoverMat = new THREE.MeshStandardMaterial({
      color: '#A5E6D0',
      transparent: true,
      opacity: 0.45,
      roughness: 0.2,
      metalness: 0.1,
    });
    const ghArch = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 6.8, 16, 1, false, 0, Math.PI), ghCoverMat);
    ghArch.rotation.z = Math.PI / 2;
    ghArch.rotation.y = Math.PI / 2;
    ghArch.position.set(0, 0.3, 0);
    nurseryGroup.add(ghArch);

    // Internal Raised Beds (green sprouts)
    const plantMat = new THREE.MeshStandardMaterial({ color: '#4ADE80', roughness: 0.5 });
    for (let bx = -1.8; bx <= 1.8; bx += 1.8) {
      const bed = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 5.2), plantMat);
      bed.position.set(bx, 0.35, 0);
      nurseryGroup.add(bed);
    }

    scene.add(nurseryGroup);

    // ------------------------------------------
    // E. BSF Research Pilot Unit (Position: 0, 0, 10)
    // ------------------------------------------
    const bsfGroup = new THREE.Group();
    bsfGroup.position.set(0, 0, 10);

    const bsfBase = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 0.2, 4),
      new THREE.MeshStandardMaterial({ color: '#3A423E', roughness: 0.7 })
    );
    bsfBase.position.y = 0.1;
    bsfGroup.add(bsfBase);

    // Modular research cage
    const cageMat = new THREE.MeshStandardMaterial({
      color: '#B5F45B',
      wireframe: true,
      roughness: 0.2,
    });
    const bsfChamber = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.0, 3.2), cageMat);
    bsfChamber.position.set(0, 1.1, 0);
    bsfGroup.add(bsfChamber);

    scene.add(bsfGroup);

    // ------------------------------------------
    // F. FarmOS Central Hub (Position: 0, 0, -2)
    // ------------------------------------------
    const farmosGroup = new THREE.Group();
    farmosGroup.position.set(0, 0, -2);

    const office = new THREE.Mesh(
      new THREE.BoxGeometry(4.2, 2.6, 3.6),
      new THREE.MeshStandardMaterial({ color: '#E8E4D8', roughness: 0.4 })
    );
    office.position.y = 1.3;
    office.castShadow = !isSoftwareGl;
    farmosGroup.add(office);

    // Solar panels on roof
    const solarMat = new THREE.MeshStandardMaterial({ color: '#1E293B', metalness: 0.8, roughness: 0.2 });
    const solar = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.1, 2.8), solarMat);
    solar.position.set(0, 2.65, 0);
    solar.rotation.x = 0.15;
    farmosGroup.add(solar);

    // Weather mast
    const mast = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 3.8),
      new THREE.MeshStandardMaterial({ color: '#B5F45B', metalness: 0.5 })
    );
    mast.position.set(1.8, 3.6, 1.4);
    farmosGroup.add(mast);

    scene.add(farmosGroup);

    // ------------------------------------------
    // Perimeter Trees & Bamboo Groves (Procedural)
    // ------------------------------------------
    const trunkMat = new THREE.MeshStandardMaterial({ color: '#4A3324', roughness: 0.9 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: '#1B4734', roughness: 0.6 });

    const treePositions = [
      [-18, 0, -18], [-14, 0, -20], [-6, 0, -22], [4, 0, -21], [14, 0, -18], [20, 0, -14],
      [22, 0, -4], [21, 0, 8], [18, 0, 18], [8, 0, 20], [-8, 0, 20], [-18, 0, 16], [-20, 0, 4]
    ];

    treePositions.forEach(([tx, ty, tz]) => {
      const treeGroup = new THREE.Group();
      treeGroup.position.set(tx, ty, tz);

      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.35, 3.5, 6), trunkMat);
      trunk.position.y = 1.75;
      trunk.castShadow = !isSoftwareGl;

      const foliage = new THREE.Mesh(new THREE.DodecahedronGeometry(1.8, 1), foliageMat);
      foliage.position.y = 4.2;
      foliage.castShadow = !isSoftwareGl;

      treeGroup.add(trunk, foliage);
      scene.add(treeGroup);
    });

    // Handle Window Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // ==========================================
    // RENDER / ANIMATION LOOP WITH DAMPING
    // ==========================================
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Smooth camera position damping
      camera.position.x = THREE.MathUtils.damp(camera.position.x, targetCameraPos.current.x, 3.0, dt);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCameraPos.current.y, 3.0, dt);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, targetCameraPos.current.z, 3.0, dt);

      // Smooth camera lookAt damping
      currentLookAt.current.x = THREE.MathUtils.damp(currentLookAt.current.x, targetLookAt.current.x, 3.5, dt);
      currentLookAt.current.y = THREE.MathUtils.damp(currentLookAt.current.y, targetLookAt.current.y, 3.5, dt);
      currentLookAt.current.z = THREE.MathUtils.damp(currentLookAt.current.z, targetLookAt.current.z, 3.5, dt);

      camera.lookAt(currentLookAt.current);

      // Subtle water shimmer
      water.rotation.y += 0.002;

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        // Pace loop for software WebGL to save CPU cycles
        frameIdRef.current = window.setTimeout(() => {
          requestAnimationFrame(animate);
        }, 50);
      } else {
        frameIdRef.current = requestAnimationFrame(animate);
      }
    };

    frameIdRef.current = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
        clearTimeout(frameIdRef.current);
      }
      renderer.dispose();
      if (container && renderer.domElement) {
        try {
          container.removeChild(renderer.domElement);
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[620px] lg:h-[720px] rounded-2xl overflow-hidden border border-[#176B4D]/30 bg-[#0D1F18] shadow-2xl">
      
      {/* 3D WebGL Canvas Mount */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing"
        data-testid="three-farm-canvas"
      />

      {/* Top Spec & Zone Indicator Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="bg-[#102820]/90 border border-[#176B4D]/40 px-4 py-2.5 rounded-lg shadow-lg pointer-events-auto backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B5F45B]" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#B5F45B]">Interactive 3D Farm Model</span>
          </div>
          <h3 className="text-sm font-semibold text-white mt-0.5">{activeZone.name}</h3>
        </div>

        <div className="pointer-events-auto">
          <button
            onClick={resetToOverview}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              cameraPreset === 'overview'
                ? 'bg-[#176B4D] text-white border-[#B5F45B]/40'
                : 'bg-[#102820]/80 text-[#F5F1E7]/80 border-white/10 hover:bg-[#176B4D]/50'
            }`}
          >
            Reset Overview
          </button>
        </div>
      </div>

      {/* Floating Zone Context Card (Displays detailed Bengali information about the selected area) */}
      <div className="absolute top-20 right-4 max-w-sm w-full bg-[#102820]/95 border border-[#176B4D]/40 p-5 rounded-xl shadow-2xl text-white backdrop-blur-md pointer-events-auto transition-all">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono text-[#B5F45B] uppercase tracking-wider">
            {activeZone.status}
          </span>
          <span className="text-[11px] text-[#F5F1E7]/60 font-mono">Zone #{activeZone.id}</span>
        </div>

        <h4 className="text-base font-bold text-white mb-1 font-bn">{activeZone.nameBn}</h4>
        <p className="text-xs text-[#F5F1E7]/75 font-bn leading-relaxed mb-4">
          {activeZone.descriptionBn}
        </p>

        <div className="space-y-2 text-xs border-t border-white/10 pt-3 font-bn">
          <div>
            <span className="text-[#B5F45B] font-medium block">ভূমিকা (Role):</span>
            <span className="text-[#F5F1E7]/90">{activeZone.systemRoleBn}</span>
          </div>
          <div>
            <span className="text-[#55B9B0] font-medium block">উপকরণ (Inputs):</span>
            <span className="text-[#F5F1E7]/80">{activeZone.inputsBn}</span>
          </div>
          <div>
            <span className="text-[#B5F45B] font-medium block">আউটপুট (Outputs):</span>
            <span className="text-[#F5F1E7]/80">{activeZone.outputsBn}</span>
          </div>
        </div>
      </div>

      {/* Collapsible Unified Bottom Control Dock (Section 5 Three.js Directives) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 pointer-events-none">
        <div className="pointer-events-auto bg-[#102820]/95 border border-[#176B4D]/40 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-300">
          
          {/* Collapse/Expand Toggle Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#0D1F18]/60">
            <div className="flex items-center gap-2 text-xs text-[#F5F1E7]/80">
              <Layers className="w-3.5 h-3.5 text-[#B5F45B]" />
              <span className="font-mono uppercase tracking-wider text-[11px]">Select Zone To Inspect</span>
            </div>
            <button
              onClick={() => setIsDockCollapsed(!isDockCollapsed)}
              className="flex items-center gap-1 text-xs text-[#F5F1E7]/70 hover:text-white transition-colors"
              aria-label={isDockCollapsed ? 'Expand Controls' : 'Collapse Controls'}
            >
              <span>{isDockCollapsed ? 'Show Units' : 'Hide Units'}</span>
              {isDockCollapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Dock Content */}
          {!isDockCollapsed && (
            <div className="p-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {FARM_ZONES.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => selectZone(zone)}
                    className={`px-2.5 py-2 rounded-lg text-left transition-all flex flex-col justify-between ${
                      activeZone.id === zone.id
                        ? 'bg-[#176B4D] text-white border border-[#B5F45B]/60 shadow-md'
                        : 'bg-white/5 text-[#F5F1E7]/80 hover:bg-white/10 hover:text-white border border-transparent'
                    }`}
                  >
                    <span className="text-xs font-semibold truncate w-full">{zone.name}</span>
                    <span className="text-[10px] text-[#B5F45B]/90 font-bn truncate w-full mt-0.5">
                      {zone.nameBn}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};
