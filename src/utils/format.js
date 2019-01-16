function formatTime(params) {
    let t = new Date()
    if (params === 'h:m:s') {
        return `${t.getHours()}:${t.getMinutes()<10?'0'+t.getMinutes():t.getMinutes()}`
    }   
    if (params === 'y:m:d') {
        return `${t.getFullYear()}年${t.getMonth()<9?'0'+(t.getMonth()+1):t.getMonth()+1}月${t.getDate()<10?'0'+t.getDate():t.getDate()}日`
    }
}

export {
    formatTime
}