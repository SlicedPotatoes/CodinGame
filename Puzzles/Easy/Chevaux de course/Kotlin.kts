import java.util.*
import java.io.*
import java.math.*

fun main(args : Array<String>) {
    val input = Scanner(System.`in`)
    val N = input.nextInt()
    val array = Array<Int>(N){0}
    for (i in 0 until N) {
        array[i] = input.nextInt()
    }

    Arrays.sort(array);

    var minDiff = 10000000

    for(i in 1 until N){
        var diff = array[i] - array[i-1]
        if(diff < minDiff){
            minDiff = diff
        }
    }

    println(minDiff)
}