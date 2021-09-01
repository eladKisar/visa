export function validateName(v) {
    return !!v && /((^| )(['",א-ת]+)){2,}$/.test(v); // This regex looks weird because hebrew rtl
}

export function validatePassword(v) {
    return !!v;
}
