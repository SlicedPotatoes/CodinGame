<?php
fscanf(STDIN, "%d", $N);
$array = array();
for ($i = 0; $i < $N; $i++)
{
    fscanf(STDIN, "%d", $array[$i]);
}
sort($array);
$minDiff = 10000000;
for($i = 1; $i < $N; $i++){
    $diff = $array[$i] - $array[$i-1];
    if($diff < $minDiff){
        $minDiff = $diff;
    }
}
echo($minDiff);
?>