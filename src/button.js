import { Sprite, utils } from 'pixi.js'

/**
 * An UI button object
 *
 * @class
 * @extends PIXI.utils.EventEmitter
 */

export class ButtonTexture extends utils.EventEmitter {
    constructor (options) {
        super (options);
        this._options = options;
        const _btn = new Sprite (options.textureButton);
        _btn._btnMode = true;
        _btn.anchor.set (options.anchor ? options.anchor : 0.5);
        _btn.position.x = options.x;
        _btn.position.y = options.y;
        _btn.interactive = true;
        _btn
        // set the mousedown and touchstart callback...
            .on ('mousedown', this.onButtonDown)
            .on ('touchstart', this.onButtonDown)
            // set the mouseup and touchend callback...
            .on ('mouseup', this.onButtonUp)
            .on ('touchend', this.onButtonUp)
            .on ('mouseupoutside', this.onButtonUp)
            .on ('touchendoutside', this.onButtonUp)
            // set the mouseover callback...
            .on ('mouseover', this.onButtonOver)
            // set the mouseout callback...
            .on ('mouseout', this.onButtonOut)
        //  .on ('tap', this.onButtonDown)
        //  .on ('click', this.onButtonDown)

        this.button = _btn;
    }

    getButtonFace () {
        return this.button;
    }

    onButtonDown () {
        this.button.isdown = true;
        this.emit ("BUTTONDOWN");
        this.button.texture = this._options.textureButtonDown;
        this.button.alpha = 1;
        window.console.log ("button down")
    }


    onButtonUp () {
        this.button.isdown = false;
        if (this.button.isOver) {
            this.emit ("BUTTONCONFIRM");
            this.button.texture = this._options.textureButtonOver;
        } else {
            this.emit ("BUTTONUP");
            this.button.texture = this._options.textureButton;
        }
        window.console.log ("button up")
    }

    onButtonOver () {
        this.button.isOver = true;
        this.emit ("BUTTONOVER");
        if (this.button.isdown) {
            return;
        }
        this.button.texture = this._options.textureButtonOver;
    }

    onButtonOut () {
        this.button.isOver = false;
        this.emit ("BUTTONOUT");
        if (this.button.isdown) {
            return;
        }
        this.button.texture = this._options.textureButton;
    }

}
