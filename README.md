# コンテナでNuxtをgenerateする

- volumeにnuxtアプリをアタッチ
- nuxtを含むコンテナを作成。generate先をvolumeにする

## Dockerコマンド

```
# Volumeくっつける
docker run -d --name express-1 -p 80:8080 --rm -v /Users/gotoukensuke/Desktop/ctr-nuxt-generate/volume:/volume my-express:1.5
```

