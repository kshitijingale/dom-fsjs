const list = document.querySelectorAll('#SIvCob a')

for (let i = 0; i < list.length; i = i + 2) {
    list[i].remove()
}
