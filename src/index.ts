export interface IantOptions {
    /**
     * (Unit: seconds) How long does it take the typer to type 1 letter.
     */
    speed: number;
    /**
     * (Unit: seconds) How long will the typer wait for after finshing typing 1 letter.
     */
    wait: { min: number, max: number }
}

export default class Iant {
    static readonly VERSION = "0.1.0";
    static readonly PEOPLE = {
        NOOB: {
            speed: 0.9,
            wait:{min:0,max:3}
        },
        NORMAL: {
            speed: 0.4,
            wait:{min:0,max:1}
        },
        PRO: {
            speed: 0.1,
            wait:{min:0,max:0}
        }
    }
    
    private _intervalId: number;
    private _text: string;
    private _i: number = 0;
    value: string = "";
    private _eventsHandler = { type: new Set() ,end:new Set()};
    private _options: IantOptions;
    constructor(text: string, options: IantOptions=Iant.PEOPLE.NORMAL) {
        this._text = text;
        this._options = options;
    }
    start() {
        this._intervalId = setInterval(() => {
            this.value += this._text.slice(this._i, this._i + 1);
            this._eventsHandler.type.forEach((_, val2) => {
                //@ts-ignore
                val2();
            })
            ++this._i;
            if (this._i >= this._text.length) {
                this._eventsHandler.end.forEach((_, val2) => {
                    //@ts-ignore
                    val2();
                })
                clearInterval(this._intervalId);
                return;
            }
        }, (this._options.speed + Math.floor(Math.random() * (this._options.wait.max - this._options.wait.min + 1) + this._options.wait.min)) * 1000);

    }
    end() {
        this._eventsHandler.type.forEach((_, val2) => {
            //@ts-ignore
            val2();
        })
        clearInterval(this._intervalId);
        return;
    }
    on(event: "type"|"end", handler: (arg?: object | undefined) => void) {
        switch (event) {
            case "type":
                this._eventsHandler.type.add(handler);
                break;
            case "end":
                this._eventsHandler.end.add(handler);
                break;
            default:
                throw new Error("Iant error: Unknown event.");

        }
    }
}