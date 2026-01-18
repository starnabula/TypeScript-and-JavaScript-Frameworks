
interface UserEvent {
    showMessage(m: number): string;
    showMessage(d: string): string;
    showMessage(d: boolean): string;
}



interface UserEvent2{
    showMessage(m: number | string | boolean): string;
}