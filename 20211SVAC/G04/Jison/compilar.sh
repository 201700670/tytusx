#!/bin/zsh

echo compilando archivos jison...
jison ./XML/AnalyzerXML.jison
jison ./XPATH/jisonXpaht.jison
jison ./XPATH/AnalyzerXpathDesc.jison
jison ./XQUERY/analizadorXquery.jison
jison ./OPTIMIZADOR/analizadorOptimizador.jison
echo ----------------------------------------

echo traspilando archivos TypeScript
tsc
echo ----------------------------------------

echo moviendo archivo
mv AnalyzerXML.js ../js
if [ -d ../js/XQUERY ];
then echo "Carpeta ya existe"
else mkdir ../js/XQUERY
fi
if [ -d ../js/C3D/OPTIMIZADOR ];
then echo "Carpeta ya existe"
else mkdir ../js/C3D/OPTIMIZADOR
fi
mv analizadorXquery.js ../js/XQUERY
mv jisonXpaht.js ./XPATH
mv AnalyzerXpathDesc.js ../js/XPATH
mv analizadorOptimizador.js ../js/C3D/OPTIMIZADOR
echo ----------------------------------------
