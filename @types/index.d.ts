import * as PIXI from 'pixi.js'

type STATUS = 'FOCUSED' | 'DISABLED' | 'DEFAULT' | string

interface TextInputOptions {
    position?: string
    background?: string
    border?: string
    outline?: string
    lineHeight?: string
    multiline?: boolean
    box?: any
    input?: any
}


export declare class TextInput extends PIXI.Container {
    _input_style: TextInputOptions
    _box_generator: any
    _box_cache: object
    _previous: object
    _dom_added: boolean
    _dom_visible: boolean
    _dom_input: HTMLInputElement
    _placeholder: string
    _placeholderColor: number
    _selection: number[]
    _restrict_value: string
    _restrict_regex: RegExp
    _substituted: string
    _disabled: boolean
    _max_length: number
    state: STATUS


    constructor(options?: TextInputOptions)

    get substituteText(): boolean
    set substituteText(substitute: boolean): void

    get placeholder(): string
    set placeholder(text: string): void

    get disabled(): boolean
    set disabled(n: boolean): void

    get maxLength(): number
    set maxLength(length: number): void

    get restrict(): RegExp
    set restrict(regex: RegExp): void

    htmlInput(): HTMLInputElement


    text(): string
    text(text: string): void

    htmlInput(): HTMLInputElement

    focus(): void

    blur(): void


    select(): void

    setInputStyle(n: string, v: any): void

    destroy(): void

    protected _createDOMInput(): void

    protected _addListeners(): void

    _onInputKeyDown(e: KeyboardEvent | TouchEvent): void

    _onInputInput(e: KeyboardEvent | TouchEvent): void

    _onInputKeyUp(e: KeyboardEvent | TouchEvent): void

    _onFocused(): void

    _onBlurred(): void

    _onAdded(): void

    _onRemoved(): void

    _setState(state: STATUS): void

    renderWebGL(renderer: PIXI.Renderer): void

    renderCanvas(renderer: PIXI.Renderer): void

    render(renderer: PIXI.Renderer): void


    _renderInternal(renderer: PIXI.Renderer): void

    _update(): void

    _updateBox(): void

    _updateSubstitution(): void

    _updateDOMInput(): void

    _applyRestriction(): void

    _needsUpdate(): void

    _needsNewBoxCache(): void

    _createSurrogate(): void

    _updateSurrogate(): void

    _updateSurrogateHitbox(bounds: PIXI.Bounds): void

    _updateSurrogateMask(bounds: PIXI.Bounds, paddings: number[]): void

    _destroySurrogate(): void

    _onSurrogateFocus(): void

    _ensureFocus(): void

    _deriveSurrogateStyle(): void

    _deriveSurrogatePadding(): void

    _deriveSurrogateText(): void

    _updateFontMetrics(): void

    _buildBoxCache(): void

    _destroyBoxCache(): void

    _hasFocus(): void

    _setDOMInputVisible(visible: boolean): void

    _getCanvasBounds(): void

    _getDOMInputBounds(): void

    _getDOMRelativeWorldTransform(): void

    _pixiMatrixToCSS(m: object): void

    _comparePixiMatrices(m1: object, m2: object): void

    _compareClientRects(r1: object, r2: object): void
}


interface ButtonOptions {
    anchor?: number
    x?: number
    y?: number
    textureButton?: PIXI.Texture
    textureButtonDown?: PIXI.Texture
    textureButtonOver?: PIXI.Texture
}

type BUTTON_STATUS = 'BUTTONDOWN' | 'BUTTONCONFIRM' | 'BUTTONUP' | 'BUTTONOVER' | 'BUTTONOUT' | string

export declare class ButtonTexture extends PIXI.utils.EventEmitter {

    _options: ButtonOptions
    button: Sprite

    constructor(options?: ButtonOptions)

    protected onButtonDown(): void

    protected onButtonUp(): void

    protected onButtonOver(): void

    getButtonFace(): Sprite
}
