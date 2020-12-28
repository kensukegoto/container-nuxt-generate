# コミット

```
追加：Expressを動かす
追加：ExpressでLinuxコマンド試す”touch”する
追加：Volumeをくっつけてtouchする
追加：Volumeでnuxt generateする
追加：Volumeでbuildしてgenerateする
```

# Dockerコマンド

```
# Volumeくっつける
docker run -d --name express-1 -p 80:8080 --rm -v /Users/gotoukensuke/Desktop/ctr-nuxt-generate/volume:/volume my-express:1.5
```