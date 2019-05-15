## react-native一路上的坑

### 5.14 初始化第一个demo，报错

    PS D:\work\RNdir\Project1> react-native run-android
    info Starting JS server...
    info Building and installing the app on the device (cd android && gradlew.bat app:installDebug)...
    Unzipping C:\Users\pc\.gradle\wrapper\dists\gradle-4.10.2-all\9fahxiiecdb76a5g3aw9oi8rv\gradle-4.10.2-all.zip to C:\Users\pc\.gradle\wrapper\dists\gradle-4.10.2-all\9fahxiiecdb76a5g3aw9oi8rv
    Exception in thread "main" java.util.zip.ZipException: error in opening zip file
            at java.util.zip.ZipFile.open(Native Method)
            at java.util.zip.ZipFile.<init>(ZipFile.java:225)
            at java.util.zip.ZipFile.<init>(ZipFile.java:155)
            at java.util.zip.ZipFile.<init>(ZipFile.java:169)
            at org.gradle.wrapper.Install.unzip(Install.java:215)
            at org.gradle.wrapper.Install.access$600(Install.java:27)
            at org.gradle.wrapper.Install$1.call(Install.java:75)
            at org.gradle.wrapper.Install$1.call(Install.java:48)
            at org.gradle.wrapper.ExclusiveFileAccessManager.access(ExclusiveFileAccessManager.java:69)
            at org.gradle.wrapper.Install.createDist(Install.java:48)
            at org.gradle.wrapper.WrapperExecutor.execute(WrapperExecutor.java:107)
            at org.gradle.wrapper.GradleWrapperMain.main(GradleWrapperMain.java:61)
    error Could not install the app on the device, read the error above for details.
    Make sure you have an Android emulator running or a device connected and have
    set up your Android development environment:
    https://facebook.github.io/react-native/docs/getting-started.html
    error Command failed: gradlew.bat app:installDebug. Run CLI with --verbose flag for more details.

* 构建项目过程中`gradle`压缩包出错

* 解决办法
    官网下载压缩包手动放入对应目录， [官方链接](https://gradle.org/releases/)


### 5.14 启动项目报错 `could not connect to development server`

* 解决办法
    模拟器配置代理 Host name: 127.0.0.1  Port number: 8081

### 5.15 all the best