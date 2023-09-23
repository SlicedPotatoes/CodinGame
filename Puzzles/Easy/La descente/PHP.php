<?php
while (TRUE)
{
    $max = -1;
    $index = -1;
    for ($i = 0; $i < 8; $i++)
    {
        fscanf(STDIN, "%d", $mountainH);
        if($mountainH > $max){
            $max = $mountainH;
            $index = $i;
        }
    }
    echo($index."\n");
}
?>