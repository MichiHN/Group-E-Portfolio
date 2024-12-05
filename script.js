const images = [
    "https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/462640943_1308339573631914_5452986120657671201_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFYjAJrcE_WtPnVgmsJJNWie1AcU4kTeR17UBxTiRN5HejARo966nIntOeaoXLe9bA3NRuLjRo5OPmbIncwPczL&_nc_ohc=t_lHq_pMFuIQ7kNvgGu7KPJ&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&oh=03_Q7cD1QEwKp4YEXGOr1fImTbYhW6RCqTu3IVBwCAeYaMTDVvfGA&oe=6777D89F",
    "https://scontent.fmnl17-5.fna.fbcdn.net/v/t1.15752-9/465034578_590651206659280_4419169091439698327_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF8k94r7At1MmSYWZSmG-mpYYaqfcfsu1Rhhqp9x-y7VMP4_SIvDjZGVr08q-x8MxS-B-0FDIVPUDutkck2BCx3&_nc_ohc=-RPuGC2GbLUQ7kNvgHiM6wS&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&oh=03_Q7cD1QHFaF2yrPBx7RVMFC3zSv4_HKS_y--lL_MyEJAS0jvxhg&oe=6777DB4E",
    "https://scontent.fmnl17-7.fna.fbcdn.net/v/t1.15752-9/462643605_1095176982257475_2483861883619678852_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeElQn3f95TTnJEcL1g1tDOIpXjV18aN2laleNXXxo3aVluPBrC8qVdka8wMTm9_FivV1bepJxFT4Zh3uDcTQxt2&_nc_ohc=KP7u3DiS2EIQ7kNvgHaWhZe&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&oh=03_Q7cD1QGUqHD0jMtGcs2ns2-Vv_yU9sZky174eLVazBnK9RyrAQ&oe=6777EAB5",
    "https://scontent.fmnl17-5.fna.fbcdn.net/v/t1.15752-9/462645959_954055333438776_7211308609875086565_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE3EEqXX4DH89OVf7tvL8koMScJLytt1foxJwkvK23V-lZdozurPLbWGgr0D8THRyycHh076kOtMnNH-p0-tEAw&_nc_ohc=YJ2a5PaYvxoQ7kNvgE-FPuV&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&oh=03_Q7cD1QEOsMf8-JwgqNiLulkHLVro7E5IHSyxt-VvqE5p-aggZg&oe=6777BB27",
    "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.15752-9/462641144_967083215438743_3193207852960074928_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEvrOPdZt9a1IuoxtkL3sIgXFP7XWCjQ9hcU_tdYKND2IEUssQib6bMixmgiBRm0ZTKN9z3xGdCLJxxfmTWjx5I&_nc_ohc=CJdwm9PHZ6cQ7kNvgFoGMVf&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&oh=03_Q7cD1QFoXp6ybNauzk1C00psxTfKYzRC3IJL5W7F5H2CtyH-XQ&oe=6777CF1B",
    "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.15752-9/466912894_883640206920775_6376740138868392325_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEl-AKFznb20g2Imnmte8uImKJvTtuYdwmYom9O25h3CdafUYjZOepcvDMIT-wOrAOt9GnIMUGEQOCmoQyJrLrB&_nc_ohc=2bCgIsNJICEQ7kNvgHR_t5b&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&oh=03_Q7cD1QGpotHtJJvUJC8oRgssDqTNfE4kNEh8P0UZFm03EE4mqw&oe=6777CC1B",
    "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.15752-9/462647418_1103227798079417_3441496731735756433_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFuXPI0hY42uh6xcjRnkrNWe7i8D26lgtt7uLwPbqWC21TFv6AR2NM697UtiyZiEH5y1FK-Ugtwdsk-EEhwWk71&_nc_ohc=WmGjj12k7DkQ7kNvgE-NYh3&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&oh=03_Q7cD1QHuNlJoE1n4KKeX0uL1lW_uodaRsDEonDy-v3F22gMkKg&oe=6777BDF1",
    "https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.15752-9/462649924_1230604111551532_6575067894397523584_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeET0NiMlaoaMRDHzDlo3yBfsUusk8MQoAyxS6yTwxCgDJz12KzT66jkNROk4a-uI4oFwV6Yjri-gRZhf_vPKRuT&_nc_ohc=-a5A3gnF0ggQ7kNvgFkoAPc&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&oh=03_Q7cD1QEf-j65l5TWNiwdlpEOHAnGeDpX3mmsuzTlo_LW-wTkZA&oe=6777E645",
    "https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.15752-9/462579099_1997811570730618_4905039158457832235_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEFulyjAorNLCoCnA7aSlradAO8qobaMV10A7yqhtoxXSyznp4xJS_N4jkMEVw-60AZxWb-utI78Q6MX9dNUY5u&_nc_ohc=i-MA7O3Gr28Q7kNvgFwVQZ9&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&oh=03_Q7cD1QEnOPg3cQqICpDSWhjPspqIEZVHnqc--G88MU2A8UQy3g&oe=6777C50C"
];

const imageLinks = [
    "mem1.html",
    "mem2.html",
    "mem3.html",
    "mem4.html",
    "mem5.html",
    "mem6.html",
    "mem7.html",
    "mem8.html",
    "mem9.html"
];

let currentIndex = 0;
const profileImage = document.getElementById('profile-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    profileImage.src = images[currentIndex];
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    profileImage.src = images[currentIndex];
});

profileImage.addEventListener('click', () => {
    window.location.href = imageLinks[currentIndex];
});