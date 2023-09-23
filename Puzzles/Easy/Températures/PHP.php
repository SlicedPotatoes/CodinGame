<?php
fscanf(STDIN, "%d", $n);
$inputs = explode(" ", fgets(STDIN));
$minAbs = 5526;
$minValue = 5526;
for ($i = 0; $i < $n; $i++)
{
    $t = intval($inputs[$i]);
    if(abs($t) < $minAbs){
        $minAbs = abs($t);
        $minValue = $t;
    }
    else if (abs($t) == $minAbs && $t > 0){
        $minValue = $t;
    }
}

echo($n == 0 ? 0 : $minValue);
?>