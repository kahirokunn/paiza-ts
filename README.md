# paizaをtsで解く方法

## 方針

1. ファイル名は問題名と同じにする
2. トランスパイラ使ってないので1ファイルに全コードを纏める (いつか入れるかも)

## 手順書

1. ファイルを用意

```
$ touch [問題名].ts
```

2. typescript compilerを走らせる

```
$ tsc [問題名].ts --watch
```

3. 排出されてるjsを普通にnodeで実行

```
$ node [問題名].js
```