interface userData {
    phoneNumber?: string;
    email?: string;
    nickname?: string;
    name?: string;
    sername?: string;
    sex?: string;
    advantages?: Array<string>;
    checkboxGroup?: Array<number>;
    radioGroup?: number;
    about?: string;
}

export default class User {
    static step: number;
    static data: userData;

    static {
        this.step = 0;
        this.data = {
            phoneNumber: "",
            email: "",
            nickname: "",
            name: "",
            sername: "",
            sex: "",
            advantages: [],
            checkboxGroup: [],
            radioGroup: -1,
            about: "",
        };
    }

    static write(newData: userData) {
        this.data = { ...newData, ...this.data };
    }
}

//amogus