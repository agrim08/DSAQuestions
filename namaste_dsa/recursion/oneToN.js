function fun(n, num) {
    if (n > num) return;

    console.log(n);
    fun(n + 1, num);
}

fun(1, 10);
