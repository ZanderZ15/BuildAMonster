class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {},
        bodyX: 300
    };  // Create an object to hold sprite bindings

        //Create constants for the monster location
        //this.bodyX = 300;
        this.bodyY = 325;
        this.leg_modx = 75;
        this.leg_mody = 100;
        this.arm_modx = 75;
        this.arm_mody = 0;
        this.head_modx = 0;
        this.head_mody = -150;
        this.eye_modx = 50;
        this.eye_mody = 150;
        this.antx = 15;
        this.anty = -260;
        this.snotx = 0;
        this.snoty = -115;
        this.mX = 0;
        this.mY = -75;
        this.my.smile = true;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        
        let my = this.my;   // create an alias to this.my for readability
        
        //BODY
        my.sprite.body = this.add.sprite(my.bodyX, this.bodyY, "monsterParts", "body_blueF.png");
        //LEGS       
        my.sprite.l_leg = this.add.sprite(my.bodyX+this.leg_modx, this.bodyY+this.leg_mody, "monsterParts", "leg_whiteB.png");
        my.sprite.r_leg = this.add.sprite(my.bodyX-this.leg_modx, this.bodyY+this.leg_mody, "monsterParts", "leg_whiteB.png");
        my.sprite.r_leg.flipX = true;
        //ARMS
        my.sprite.l_arm = this.add.sprite(my.bodyX+this.arm_modx, this.bodyY+this.arm_mody, "monsterParts", "arm_greenB.png");
        my.sprite.r_arm = this.add.sprite(my.bodyX-this.arm_modx, this.bodyY+this.arm_mody, "monsterParts", "arm_greenB.png");
        my.sprite.r_arm.flipX = true;
        //HEAD
        
        my.sprite.head = this.add.sprite(my.bodyX+this.head_modx, this.bodyY+this.head_mody, "monsterParts", "body_yellowC.png");
        //--FACE
        //EYES
        my.sprite.l_eye = this.add.sprite(my.bodyX+this.eye_modx, this.bodyY-this.eye_mody, "monsterParts", "eye_psycho_dark.png");
        my.sprite.r_eye = this.add.sprite(my.bodyX-this.eye_modx, this.bodyY-this.eye_mody, "monsterParts", "eye_psycho_light.png");
        my.sprite.r_eye.flipX=true;
        //Antenna
        my.sprite.ant = this.add.sprite(my.bodyX+this.antx, this.bodyY+this.anty, "monsterParts", "detail_dark_antenna_large.png");
        //MOUTH
        //SMILE
        my.sprite.smile = this.add.sprite(my.bodyX+this.mX, this.bodyY+this.mY, "monsterParts", "mouthH.png");
        //FANG
        my.sprite.fang = this.add.sprite(my.bodyX+this.mX, this.bodyY+this.mY, "monsterParts", "mouthI.png");
        if (my.smile) {
            my.sprite.fang.visible = false;
        } else {
            my.sprite.smile.visible = false;
        }
        
        //SNOT FOR NOSE?
        my.sprite.nose = this.add.sprite(my.bodyX+this.snotx, this.bodyY+this.snoty, "monsterParts", "snot_large.png");
        
        
    }

    clear() { 
        let my = this.my;
        //BODY
        my.sprite.body.destroy(true);
        //LEGS       
        my.sprite.l_leg.destroy(true);
        my.sprite.r_leg.destroy(true);
        //ARMS
        my.sprite.l_arm.destroy(true);
        my.sprite.r_arm.destroy(true);
        //HEAD
        my.sprite.head.destroy(true);
        //--FACE
        //EYES
        my.sprite.l_eye.destroy(true);
        my.sprite.r_eye.destroy(true);
        //Antenna
        my.sprite.ant.destroy(true);
        //MOUTHS
        //SMILE
        my.sprite.smile.destroy(true);
        //FANG
        my.sprite.fang.destroy(true);
        //SNOT FOR NOSE?
        my.sprite.nose.destroy(true);
    }

    update() {
        let my = this.my;
        //Listener
        document.addEventListener("keydown", function(event) {
            if (event.key === 's') {
                my.smile = true;
            } else if (event.key === 'f') {
                my.smile = false;
            }

            if (event.key === 'a') {
                
                my.bodyX -= 0.05;
            } else if (event.key === 'd') {
                
                my.bodyX += 0.05;
            }
        });
        this.clear();
        this.create();
        
    }

}