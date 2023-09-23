import java.util.*
import java.io.*
import java.math.*

fun main(args : Array<String>) {
    val input = Scanner(System.`in`)
    while (true) {
        var max = -1
        var index = -1
        for (i in 0 until 8) {
            val mountainH = input.nextInt()
            if(mountainH > max){
                max = mountainH
                index = i
            }
        }
        println(index)
    }
}