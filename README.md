# Clash-for-Windows_Japanese
Clash for Windowsの日本語版、つまり日本語化パッチと日本語版 Clash のインストールパッケージを提供します。

Clashのインターフェース言語を変更するだけでなく、フォントも日本語専用フォント、つまりYu Gothic UIに変更しました。
翻訳に関係する Clash ソフトウェアのバージョンは v0.20.27 です。

Provide Japanese-ver Clash for Windows, that is, the localization patch and installation package of Japanese-ver Clash.

I not only modified the interface language of Clash, but also changed the font to a Japanese-specific font——Yu Gothic UI.

The Clash software version involved in the translation is v0.20.27.

提供Clash for Windows的日语版本，即日语化补丁和日语版Clash的安装包。

我不但修改了Clash的界面语言，而且把字体修改成了日语专用字体——Yu Gothic UI。

翻译所涉及的Clash软件版本为v0.20.27。\n


このソフトウェアの翻訳原理は、特別な解凍ツールを使用して Clash 中国語版のルート ディレクトリにある app.asar を解凍し、その中にある main.js と renderer.js を見つけます。次に、main.js と renderer.js のコード内の中国語の語彙と文章を日本語に修正し、解凍したファイルを新しい app.asar にパッケージ化して元の app.asar を置き換えると、インターフェイスが日本語版になっていることがわかります。
The translation principle of this software is: unpack app.asar in the root directory of Clash Chinese version with a special decompression tool, and find main.js and renderer.js in it. Then modify the Chinese vocabulary and sentences in the main.js and renderer.js codes into Japanese, then package the decompressed file into a new app.asar and replace the original app.asar, you can see that the interface has become Japanese version.
本软件的翻译原理是：将Clash汉语版本的根目录中的app.asar用专用的解压工具解包，找到其中的main.js和renderer.js。然后把main.js和renderer.js代码中的汉语词汇和句子修改成日语，再把解压的文件封装成新的app.asar并替换掉原有的app.asar，即可看到界面已经变成了日文版。

app.asar 解凍チュートリアル (翻訳ツールで翻訳)：
https://blog.csdn.net/qq_35432904/article/details/107381278
app.asar unpacking tutorial (translate with translation tool):
https://blog.csdn.net/qq_35432904/article/details/107381278
app.asar解包教程 (用翻译工具翻译)：https://blog.csdn.net/qq_35432904/article/details/107381278
