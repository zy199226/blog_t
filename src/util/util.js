import Vue from 'vue';

export const wh = window.innerHeight;

export const ww = window.innerWidth;

export const stopBubble = (e) => {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
};

export const time = (date) => {
    const d = new Date() - new Date(date);
    let createTime = '';
    const year = Math.floor(d / 365 / 24 / 60 / 60 / 1000);
    const mouth = Math.floor(d / 30 / 24 / 60 / 60 / 1000);
    const day = Math.floor(d / 24 / 60 / 60 / 1000);
    const hours = Math.floor(d / 60 / 60 / 1000);
    const min = Math.floor(d / 60 / 1000);
    const sec = Math.floor(d / 1000);
    if (year >= 1) {
        createTime = `${year}年前`;
    } else if (mouth >= 1) {
        createTime = `${mouth}个月前`;
    } else if (day >= 1) {
        createTime = `${day}天前`;
    } else if (hours >= 1) {
        createTime = `${hours}小时前`;
    } else if (min >= 1) {
        createTime = `${min}分钟前`;
    } else if (sec >= 1) {
        createTime = `${sec}秒前`;
    } else {
        createTime = '刚刚';
    }
    return createTime;
};

export const bus = new Vue();
