# TYTCA

## 更新相簿頁面

(1) 將要新增的相簿放到 `/static_files/album` 底下，資料夾名稱將會是相簿名稱，開頭最好是日期，
例如 `20110924-參訪義光育幼院`。

(2) 在專案跟目錄執行 `ruby ./bin/build_album_pages.rb`

(3) 執行 `git commit -am "Update albums"` 與 `git push`，完成更新相簿。

## 關於編輯後台

編輯後台使用Open Source [Prose](https://github.com/prose/prose)，其可以編輯Github上的文件。   
但為了解決其中文標題空白以及預設`published:false`等問題，fork一份到`https://github.com/tytca/prose`進行修改，
所以編輯後台的網址會是`http://tytca.github.io/prose/`。   
其所使用的`GateKeeper`則是在Heroku上，使用`tytca.org@gmail.com`登入Heroku可以管理。
