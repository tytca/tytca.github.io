# TYTCA

## 更新相簿頁面

(1) 將要新增的相簿放到 `/static_files/album` 底下，資料夾名稱將會是相簿名稱，開頭最好是日期，
例如 `20110924-參訪義光育幼院`。

(2) 在專案跟目錄執行 `ruby ./bin/build_album_pages.rb`

(3) 執行 `git commit -am "Update albums"` 與 `git push`，完成更新相簿。
