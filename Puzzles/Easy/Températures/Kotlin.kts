import java.util.*
import java.io.*
import java.math.*
import kotlin.math.abs

fun main(args : Array<String>) {
    val input = Scanner(System.`in`)
    val n = input.nextInt()
    var minAbs = 5526
    var minValue = 5526
    for (i in 0 until n) {
        val t = input.nextInt()
        if(abs(t) < minAbs){
            minAbs = abs(t)
            minValue = t
        }
        else if (abs(t) == minAbs && t > 0){
            minValue = t
        }
    }
    if(n == 0){
        println(0)
    }
    else{
        println(minValue)
    }
}