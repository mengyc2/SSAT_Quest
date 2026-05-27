// ============================================================================
// ⚔️ SSAT QUEST: CORE GAME ENGINE SCRIPT
// ============================================================================

// --- ENGINE ARCHITECTURE DATA STATES ---
let playerData = {
    username: "Hero",
    level: 1,
    xp: 0,
    currentZone: "grasslands",
    masteryTracker: {}, // Stores correct answer values securely: { "questionId": correctCount }
    customInjections: { grasslands: [], marshes: [], mountains: [], volcano: [], deepsea: [] }
};

// --- MULTI-TARGET MONSTER CONFIGURATION DICTIONARIES ---
const zonesInfo = {
    grasslands: { 
        name: "The Grasslands (Lv. 1-20)", color: "#14532d", bMin: 1, bMax: 20, 
        icons: [
            {n: "Meadow Slime", e: "🟢", h: false}, {n: "Forest Goblin", e: "👺", h: false}, 
            {n: "Thief Outlaw", e: "🥷", h: false}, {n: "Spotted Owlbear", e: "🦉", h: false},
            {n: "Wild Boar Charger", e: "🐗", h: false}, {n: "Grassland Swarm Pod", e: "🐋", h: true}
        ] 
    },
    marshes: { 
        name: "The Sunken Marshes (Lv. 21-40)", color: "#451a03", bMin: 21, bMax: 40, 
        icons: [
            {n: "Muck Viper", e: "🐍", h: false}, {n: "Bog Witch", e: "🧙‍♀️", h: false}, 
            {n: "Swamp Zombie", e: "🧟", h: false}, {n: "Leech Parasite", e: "🪱", h: false},
            {n: "Algae Gator", e: "🐊", h: false}, {n: "Cattail Float Swarm", e: "🐋", h: true}
        ] 
    },
    mountains: { 
        name: "Jagged Alpine Peaks (Lv. 41-60)", color: "#334155", bMin: 41, bMax: 60, 
        icons: [
            {n: "Stone Golem", e: "🪨", h: false}, {n: "Cliff Harpy", e: "🦅", h: false}, 
            {n: "Frost Yeti", e: "❄️", h: false}, {n: "Alpine Falcon", e: "🦅", h: false},
            {n: "Mountain Ram", e: "🐏", h: false}, {n: "Condor Ridge Swarm", e: "🐋", h: true}
        ] 
    },
    volcano: { 
        name: "Magma Caldera Core (Lv. 61-80)", color: "#7f1d1d", bMin: 61, bMax: 80, 
        icons: [
            {n: "Hellhound", e: "🐕", h: false}, {n: "Lava Elemental", e: "🔥", h: false}, 
            {n: "Magma Scorpion", e: "🦂", h: false}, {n: "Fire Drake", e: "🐉", h: false},
            {n: "Ash Phoenix", e: "🦅", h: false}, {n: "Basalt Golem Swarm", e: "🐋", h: true}
        ] 
    },
    deepsea: { 
        name: "Abyssal Mariana Trench (Lv. 81-100)", color: "#1e3a8a", bMin: 81, bMax: 100, 
        icons: [
            {n: "Ghost Kraken", e: "🦑", h: false}, {n: "Abyssal Angler", e: "🐟", h: false}, 
            {n: "Shadow Leviathan", e: "🦈", h: false}, {n: "Electric Eel", e: "🐍", h: false},
            {n: "Vampire Crab", e: "🦀", h: false}, {n: "Whale Pod Swarm", e: "🐋", h: true}
        ] 
    }
};

// --- CANVAS INITIALIZATION & GEOMETRY VARIABLES ---
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let hX = 100, hY = 200; // Live map tracker coordinates
let monstersArray = [];
let targetIdx = null;
let isCombatEngaged = false;
let keyState = {};

// Active Battle Clock/Swarms Registers
let battleCountdown = null;
let secondsLeft = 30;
let isHerdModeActive = false;
let currentHerdDataObj = null;
let currentHerdIndexStep = 0;
let activeQuestionObj = null;
let herdAccumulatedXP = 0;
let herdMembersHP = [100, 100, 100];

// Mouse Navigation Click Coordinates Vectors
let mouseTargetX = null;
let mouseTargetY = null;
let isMouseNavigatingActive = false;

// --- STEP 1: LOGIN ACCOUNT INTERFACE & PROFILE SYNC ---
document.getElementById('start-btn').onclick = () => {
    let name = document.getElementById('username-input').value.trim();
    if(!name) return alert("Please enter a valid hero profile name!");
    
    playerData.username = name;
    let localSave = localStorage.getItem("SSAT_RPG_PROD_v8_" + playerData.username);
    
    if(localSave) {
        playerData = JSON.parse(localSave);
        if(!playerData.masteryTracker) playerData.masteryTracker = {};
        alert(`Welcome back, Hero ${playerData.username}! Synchronizing stats metrics...`);
        launchMainWorldMap();
    } else {
        playerData.masteryTracker = {};
        saveProfileToBrowserStorage();
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('intro-screen').classList.remove('hidden');
        setTimeout(() => { launchMainWorldMap(); }, 2000);
    }
};

function saveProfileToBrowserStorage() {
    localStorage.setItem("SSAT_RPG_PROD_v8_" + playerData.username, JSON.stringify(playerData));
}

function launchMainWorldMap() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    updateGlobalDashboardHUD();
    spawnZoneMapMonsters();
    
    // Core Clock Game loops ticking at 30fps
    setInterval(processExplorationInputLogic, 1000 / 30);
    renderCanvasScreen();
}

function updateGlobalDashboardHUD() {
    let milestoneGoal = playerData.level * 100;
    document.getElementById('display-name').innerText = playerData.username;
    document.getElementById('display-level').innerText = `Lv. ${playerData.level}`;
    document.getElementById('display-xp-text').innerText = `${playerData.xp} / ${milestoneGoal} XP`;
    document.getElementById('xp-bar-fill').style.width = `${(playerData.xp / milestoneGoal) * 100}%`;
    document.getElementById('current-zone-banner').innerText = `📍 Area: ${zonesInfo[playerData.currentZone].name}`;
}

// --- STEP 2: MULTI-INPUT TRACKING CONTROLS (ARROWS + WASD) ---
window.addEventListener("keydown", (e) => { 
    let keyInput = e.key.toUpperCase();
    if (e.key === "ArrowUp"    || keyInput === "W") keyState["Up"] = true;
    if (e.key === "ArrowDown"  || keyInput === "S") keyState["Down"] = true;
    if (e.key === "ArrowLeft"  || keyInput === "A") keyState["Left"] = true;
    if (e.key === "ArrowRight" || keyInput === "D") keyState["Right"] = true;
});

window.addEventListener("keyup", (e) => { 
    let keyInput = e.key.toUpperCase();
    if (e.key === "ArrowUp"    || keyInput === "W") keyState["Up"] = false;
    if (e.key === "ArrowDown"  || keyInput === "S") keyState["Down"] = false;
    if (e.key === "ArrowLeft"  || keyInput === "A") keyState["Left"] = false;
    if (e.key === "ArrowRight" || keyInput === "D") keyState["Right"] = false;
});

// Mouse/Trackpad Tap Canvas Navigation Event Targeter
canvas.addEventListener("mousedown", (e) => {
    if (isCombatEngaged) return;

    const canvasBounds = canvas.getBoundingClientRect();
    mouseTargetX = e.clientX - canvasBounds.left;
    mouseTargetY = e.clientY - canvasBounds.top;
    
    isMouseNavigatingActive = true;
});

// --- STEP 3: MOVEMENT EXECUTION & MAP COLLISION ENGINE LOOP ---
function processExplorationInputLogic() {
    if (isCombatEngaged) return;

    let baselineSpd = 7;
    let localKeyboardInputDetected = false;

    // Compile Keyboard Directional Velocity Vectors
    if (keyState["Up"])    { hY -= baselineSpd; localKeyboardInputDetected = true; }
    if (keyState["Down"])  { hY += baselineSpd; localKeyboardInputDetected = true; }
    if (keyState["Left"])  { hX -= baselineSpd; localKeyboardInputDetected = true; }
    if (keyState["Right"]) { hX += baselineSpd; localKeyboardInputDetected = true; }

    // Override active mouse navigation tracking if keyboard button interaction hits
    if (localKeyboardInputDetected) {
        isMouseNavigatingActive = false;
    }

    // Process mouse path heading tracking math if active
    if (!localKeyboardInputDetected && isMouseNavigatingActive) {
        let distanceDeltaX = mouseTargetX - hX;
        let distanceDeltaY = mouseTargetY - hY;
        let totalAbsoluteDistance = Math.sqrt(distanceDeltaX * distanceDeltaX + distanceDeltaY * distanceDeltaY);

        if (totalAbsoluteDistance > 5) {
            hX += (distanceDeltaX / totalAbsoluteDistance) * baselineSpd;
            hY += (distanceDeltaY / totalAbsoluteDistance) * baselineSpd;
        } else {
            isMouseNavigatingActive = false; // Arrival target achived safely
        }
    }

    // Screen Edge wraps triggers dynamic overworld grid refresh
    let borderTriggered = false;
    if (hX > canvas.width)  { hX = 20; borderTriggered = true; isMouseNavigatingActive = false; }
    if (hX < 0)             { hX = canvas.width - 20; borderTriggered = true; isMouseNavigatingActive = false; }
    if (hY > canvas.height) { hY = 20; borderTriggered = true; isMouseNavigatingActive = false; }
    if (hY < 0)             { hY = canvas.height - 20; borderTriggered = true; isMouseNavigatingActive = false; }

    if (borderTriggered) spawnZoneMapMonsters();

    // Scan collision proximity thresholds to engage fight sequences
    for (let i = 0; i < monstersArray.length; i++) {
        let m = monstersArray[i];
        let dist = Math.sqrt(Math.pow(hX - m.x, 2) + Math.pow(hY - m.y, 2));
        if (dist < 35) {
            isMouseNavigatingActive = false;
            triggerZoomedBattleStage(i);
            break;
        }
    }
    renderCanvasScreen();
}

let animationFrameTick = 0;

function renderCanvasScreen() {
    if (isCombatEngaged) return;
    let info = zonesInfo[playerData.currentZone];
    animationFrameTick++;

    ctx.fillStyle = info.color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    for(let i=0; i<canvas.width; i+=40) { ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,canvas.height); ctx.stroke(); }

    monstersArray.forEach(m => {
        let bobbingY = Math.sin(animationFrameTick * 0.15 + m.x) * 5;
        ctx.font = "36px sans-serif";
        ctx.fillText(m.emoji, m.x - 15, m.y + 12 + bobbingY);
        
        ctx.fillStyle = m.isHerd ? "#ea580c" : "rgba(0,0,0,0.6)";
        ctx.fillRect(m.x - 50, m.y - 42 + bobbingY, 100, 16);
        ctx.fillStyle = "#fff"; ctx.font = "bold 9px monospace"; ctx.textAlign = "center";
        ctx.fillText(`${m.name} Lv.${m.level}`, m.x, m.y - 31 + bobbingY);
    });

    // Vector hero rendering
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 4; ctx.textAlign = "center";
    ctx.beginPath(); ctx.arc(hX, hY - 26, 10, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(hX, hY - 16); ctx.lineTo(hX, hY + 15); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(hX - 12, hY - 4); ctx.lineTo(hX + 12, hY - 4); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(hX, hY + 15); ctx.lineTo(hX - 10, hY + 36); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(hX, hY + 15); ctx.lineTo(hX + 10, hY + 36); ctx.stroke();

    // Floating name coordinates badge locked over character vector head location
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.fillRect(hX - 60, hY - 60, 120, 18);
    ctx.fillStyle = "#eab308";
    ctx.font = "bold 10px sans-serif";
    ctx.fillText(`${playerData.username} Lv.${playerData.level}`, hX, hY - 47);
}

function spawnZoneMapMonsters() {
    monstersArray = [];
    let info = zonesInfo[playerData.currentZone];
    let spawnCount = Math.floor(Math.random() * 2) + 3; // 3 to 5 creeps

    for(let i = 0; i < spawnCount; i++) {
        let poolItem = info.icons[Math.floor(Math.random() * info.icons.length)];
        let calcLv = Math.floor(Math.random() * (info.bMax - info.bMin + 1)) + info.bMin;
        
        monstersArray.push({
            name: poolItem.n,
            emoji: poolItem.e,
            isHerd: poolItem.h,
            level: calcLv,
            x: 80 + Math.random() * (canvas.width - 160),
            y: 80 + Math.random() * (canvas.height - 160)
        });
    }
}

// --- STEP 4: SSAT DYNAMIC STRUCT FRACTION PARSER ---
function parseDynamicSSATHTML(problem) {
    let str = `<strong>[${problem.type}]</strong><br><br>${problem.textBefore}`;
    if(problem.hasFraction) {
        str += ` <span class="fraction-container">
            <span class="fraction-numerator">${problem.fracData.top}</span>
            <span class="fraction-denominator">${problem.fracData.bottom}</span>
        </span> `;
    }
    if(problem.textAfter) str += problem.textAfter;
    return str;
}

// Adaptive Spaced-Repetition question filter selector engine algorithm
function selectAdaptiveQuestion() {
    let zoneKey = playerData.currentZone;
    if(playerData.customInjections[zoneKey] && playerData.customInjections[zoneKey].length > 0) {
        return playerData.customInjections[zoneKey].shift();
    }
    let deck = MASTER_QUESTION_DATABASE[zoneKey].standard;
    let filteredDeck = deck.filter(q => {
        let scoreCount = playerData.masteryTracker[q.id] || 0;
        return scoreCount < 2; // Strict cap filter
    });
    if(filteredDeck.length === 0) return deck[Math.floor(Math.random() * deck.length)];
    return filteredDeck[Math.floor(Math.random() * filteredDeck.length)];
}

// --- STEP 5: ACTIVATED ISOLATED COMBAT MATRIX ENGINE ---
function triggerZoomedBattleStage(index) {
    isCombatEngaged = true;
    targetIdx = index;
    let monster = monstersArray[index];

    document.getElementById('exploration-zone').classList.add('hidden');
    document.getElementById('battle-arena').classList.remove('hidden');

    let stage = document.getElementById('arena-stage');
    stage.innerHTML = ""; // Clear old visual layout cards out completely

    // Rebuild player Div container
    let playerDiv = document.createElement('div');
    playerDiv.className = "stick-figure";
    playerDiv.id = "hero-sprite";
    playerDiv.innerHTML = `<div class="stick-head"></div><div class="stick-torso"></div><div class="stick-arm arm-left"></div><div class="stick-arm arm-right"></div><div class="stick-leg leg-left"></div><div class="stick-leg leg-right"></div>`;
    stage.appendChild(playerDiv);

    // Versus Tag element re-mount
    let vsDiv = document.createElement('div');
    vsDiv.id = "versus-tag";
    vsDiv.innerText = "VS";
    stage.appendChild(vsDiv);

    if (monster.isHerd) {
        isHerdModeActive = true;
        currentHerdIndexStep = 0;
        herdAccumulatedXP = 0;
        herdMembersHP = [100, 100, 100]; 
        
        let pool = MASTER_QUESTION_DATABASE[playerData.currentZone].herds;
        currentHerdDataObj = pool[Math.floor(Math.random() * pool.length)];
        
        document.getElementById('herd-progress-banner').classList.remove('hidden');
        document.getElementById('reading-passage-view').classList.remove('hidden');
        document.getElementById('reading-passage-view').innerHTML = `<strong>📜 Reading Passage:</strong><br><br>${currentHerdDataObj.passageTitle}<br><br>${currentHerdDataObj.passageText}`;
        
        let herdWrapper = document.createElement('div');
        herdWrapper.id = "herd-monsters-wrapper";
        
        // Form exactly three individual target cards with green HP indicators
        for(let k = 0; k < 3; k++) {
            let card = document.createElement('div');
            card.className = "herd-member-card";
            card.id = `herd-member-${k}`;
            card.innerHTML = `
                <div class="creep-hp-container"><div class="creep-hp-bar-fill" id="hp-fill-${k}"></div></div>
                <div class="battle-sprite">${monster.emoji}</div>
                <div style="font-size:9px; font-weight:bold; margin-top:4px;">Swarm Foe #${k+1}</div>
            `;
            herdWrapper.appendChild(card);
        }
        stage.appendChild(herdWrapper);
        loadIndividualHerdQuestion();
    } else {
        isHerdModeActive = false;
        document.getElementById('herd-progress-banner').classList.add('hidden');
        document.getElementById('reading-passage-view').classList.add('hidden');
        
        let singleEnemyDiv = document.createElement('div');
        singleEnemyDiv.id = "single-enemy-container";
        singleEnemyDiv.innerHTML = `
            <div class="enemy-hud">
                <h3 id="enemy-name">${monster.name}</h3>
                <p><span class="monster-level-badge">Lv.${monster.level}</span> | ⏱️ <span id="enemy-timer">30</span>s</p>
                <div class="timer-container"><div id="timer-bar-fill"></div></div>
            </div>
            <div class="battle-sprite" id="enemy-sprite">${monster.emoji}</div>
        `;
        stage.appendChild(singleEnemyDiv);
        
        activeQuestionObj = selectAdaptiveQuestion();
        document.getElementById('question-box').innerHTML = parseDynamicSSATHTML(activeQuestionObj);
        mountActionAnswerButtons(activeQuestionObj);
        triggerCombatClockTimer();
    }
}

function loadIndividualHerdQuestion() {
    document.getElementById('current-herd-step').innerText = (currentHerdIndexStep + 1);
    activeQuestionObj = currentHerdDataObj.questions[currentHerdIndexStep];
    document.getElementById('question-box').innerHTML = parseDynamicSSATHTML(activeQuestionObj);
    mountActionAnswerButtons(activeQuestionObj);
    triggerCombatClockTimer();
}

// --- NEW UTILITY: FISHER-YATES SHUFFLE ALGORITHM ---
// This function takes any array and scrambles its elements in a completely random order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swaps elements instantly
    }
    return array;
}

// --- UPDATED BUTTON MOUNTING ENGINE (WITH RANDOMIZED CHOICES) ---
function mountActionAnswerButtons(problem) {
    let optContainer = document.getElementById('options-box');
    optContainer.innerHTML = "";
    document.getElementById('explanation-box').classList.add('hidden');
    optContainer.classList.remove('hidden');

    // 1. Capture the text string of the correct answer before shuffling
    const correctChoiceText = problem.options[problem.correct];

    // 2. Create a shallow copy of the options array so we don't destroy our master data file
    let shuffledOptions = [...problem.options];
    shuffleArray(shuffledOptions);

    // 3. Find where the correct answer text landed inside the newly scrambled list
    const newCorrectIndex = shuffledOptions.indexOf(correctChoiceText);
    
    // 4. Temporarily override the problem's correct index tracker for this active battle evaluation
    problem.currentActiveCorrectIndex = newCorrectIndex;

    // 5. Generate the randomized buttons onto the screen console
    shuffledOptions.forEach((opt, idx) => {
        let btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerText = opt;
        
        // Pass the player's choice directly into the resolution engine
        btn.onclick = () => submitActiveCombatChoice(idx);
        optContainer.appendChild(btn);
    });
}

// --- UPDATED SUBMIT EVALUATION (CHECKS RANDOMIZED INDEX MARKERS) ---
function submitActiveCombatChoice(chosenIdx) {
    clearInterval(battleCountdown);
    document.getElementById('options-box').classList.add('hidden');
    
    // BUGPROOF REPAIR: Cross-references choice index against our temporary randomized tracker variable
    let isCorrect = (chosenIdx === activeQuestionObj.currentActiveCorrectIndex);
    
    let feedbackBox = document.getElementById('explanation-box');
    let statusText = document.getElementById('result-status');
    let explanationText = document.getElementById('explanation-text');
    let monster = monstersArray[targetIdx];
    
    feedbackBox.classList.remove('hidden');
    
    if (isHerdModeActive) {
        let currentTargetCard = document.getElementById(`herd-member-${currentHerdIndexStep}`);
        let currentTargetHPFill = document.getElementById(`hp-fill-${currentHerdIndexStep}`);
        let partialPoints = Math.round((monster.level * 90));
        
        if (isCorrect) {
            document.getElementById('hero-sprite').classList.add('attack-dash');
            
            herdMembersHP[currentHerdIndexStep] = 0;
            if(currentTargetHPFill) currentTargetHPFill.style.width = "0%";
            if(currentTargetCard) currentTargetCard.classList.add('dead');
            
            herdAccumulatedXP += partialPoints;
            statusText.innerText = "💥 CRITICAL KILL! SWARM FOE ELIMINATED!";
            statusText.style.color = "#4ade80";
            explanationText.innerHTML = `Great job! You defeated Swarm Creep #${currentHerdIndexStep+1}. Gained partial bounty yield: <strong>+${partialPoints} XP</strong>.<br><br><strong>Explanation:</strong> ${activeQuestionObj.explain}`;
        } else {
            statusText.innerText = "🛡️ ATTACK DEFLECTED! FOE DODGED!";
            statusText.style.color = "#f87171";
            explanationText.innerHTML = `Your answer missed the mark. Swarm Creep #${currentHerdIndexStep+1} survives this step. 0 XP gained. Moving to the next swarm target...<br><br><strong>Correct Approach Analysis:</strong> ${activeQuestionObj.explain}`;
        }
        
        currentHerdIndexStep++;
        let nextBtn = document.getElementById('next-battle-btn');
        
        if (currentHerdIndexStep < currentHerdDataObj.questions.length) {
            nextBtn.innerText = "Target Next Swarm Foe";
            nextBtn.onclick = () => {
                feedbackBox.classList.add('hidden');
                document.getElementById('hero-sprite').classList.remove('attack-dash');
                loadIndividualHerdQuestion();
            };
        } else {
            statusText.innerText = "🏆 SWARM CHRONICLE CONCLUDED!";
            explanationText.innerHTML = `You completed the full Reading Comprehension swarm encounter! Total bounty points collected: <strong>+${herdAccumulatedXP} XP</strong>.`;
            playerData.xp += herdAccumulatedXP;
            evaluateLevelProgressMilestones();
            
            nextBtn.innerText = "Return to Map Exploration";
            nextBtn.onclick = exitBattleReturnToOverworld;
        }
    } else {
        if (isCorrect) {
            document.getElementById('hero-sprite').classList.add('attack-dash');
            
            let singleEnemyBox = document.getElementById('single-enemy-container');
            if(singleEnemyBox) {
                singleEnemyBox.style.transition = "all 0.5s ease";
                singleEnemyBox.style.transform = "scale(0) rotate(360deg)";
                singleEnemyBox.style.opacity = "0";
            }
            
            if(!playerData.masteryTracker[activeQuestionObj.id]) playerData.masteryTracker[activeQuestionObj.id] = 0;
            playerData.masteryTracker[activeQuestionObj.id]++;
            saveProfileToBrowserStorage();

            let rewardXP = monster.level * 60;
            statusText.innerText = "⚔️ TACTICAL VICTORY!";
            statusText.style.color = "#4ade80";
            explanationText.innerHTML = `Target defeated! Gained <strong>+${rewardXP} XP</strong>.<br><br><strong>Explanation:</strong> ${activeQuestionObj.explain}`;
            
            playerData.xp += rewardXP;
            evaluateLevelProgressMilestones();
        } else {
            let singleEnemyBox = document.getElementById('single-enemy-container');
            if(singleEnemyBox) singleEnemyBox.classList.add('escape-slide');
            
            statusText.innerText = "⚠️ CALCULATION ERROR! CREEP ESCAPED!";
            statusText.style.color = "#f87171";
            
            let missedConcept = activeQuestionObj.concept;
            let currentZoneKey = playerData.currentZone;
            if(CONCEPT_VARIATION_POOL[missedConcept]) {
                CONCEPT_VARIATION_POOL[missedConcept].forEach(v => {
                    playerData.customInjections[currentZoneKey].push(v);
                });
                explanationText.innerHTML = `Your answer missed the mark. The creep escaped, and 5 custom practice variations for [${missedConcept}] have been injected into this area map loop queue!<br><br><strong>Analysis:</strong> ${activeQuestionObj.explain}`;
            } else {
                explanationText.innerHTML = `Calculation missed the mark. Study this guide:<br><br><strong>Analysis:</strong> ${activeQuestionObj.explain}`;
            }
        }
        
        let finalNextBtn = document.getElementById('next-battle-btn');
        finalNextBtn.innerText = "Return to Map Exploration";
        finalNextBtn.onclick = exitBattleReturnToOverworld;
    }

    saveProfileToBrowserStorage();
    updateGlobalDashboardHUD();
}

function evaluateLevelProgressMilestones() {
    let nextGoal = playerData.level * 100;
    let countGains = 0;
    while(playerData.xp >= nextGoal) {
        playerData.xp -= nextGoal;
        playerData.level++;
        countGains++;
        nextGoal = playerData.level * 100;
    }
    if(countGains > 0) {
        alert(`✨ RANK UP! You reached Level ${playerData.level}!`);
    }
}

// FIXED SYSTEM TRIGGER: Character position coordinates tracking locks down seamlessly
function exitBattleReturnToOverworld() {
    document.getElementById('battle-arena').classList.add('hidden');
    document.getElementById('exploration-zone').classList.remove('hidden');
    
    isCombatEngaged = false;
    monstersArray.splice(targetIdx, 1); // Delete target monster cleanly out of array parameters
    
    if (monstersArray.length === 0) spawnZoneMapMonsters();
    
    updateGlobalDashboardHUD();
    renderCanvasScreen();
}

// --- TELEPORT NAVIGATION HUB FIXED ROUTER ---
const modalView = document.getElementById('travel-modal');
document.getElementById('world-map-btn').onclick = () => { modalView.classList.remove('hidden'); };
document.getElementById('close-travel-btn').onclick = () => { modalView.classList.add('hidden'); };

document.querySelectorAll('.zone-travel-btn').forEach(btn => {
    btn.onclick = (e) => {
        playerData.currentZone = e.target.getAttribute('data-zone');
        modalView.classList.add('hidden');
        document.getElementById('battle-arena').classList.add('hidden');
        document.getElementById('exploration-zone').classList.remove('hidden');
        
        isCombatEngaged = false;
        
        // Relocate structural markers safely to the middle of the new map terrain!
        hX = 425; hY = 210;
        
        updateGlobalDashboardHUD();
        saveProfileToBrowserStorage();
        spawnZoneMapMonsters();
        renderCanvasScreen();
    };
});