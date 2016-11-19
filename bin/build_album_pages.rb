require 'fileutils'

def create_front_matter(album_name)
  front_matter = ["---",
                  "layout: album",
                  "permalink: \"/media/album/#{album_name}\"",
                  "album_folder: \"#{album_name}\"",
                  "title: \"電子相簿 - #{album_name}\"",
                  "---"]
  return front_matter
end


album_paths = Dir["./static_files/album/*"]

album_pages_path = "./pages/albums"

FileUtils.rm_rf("#{album_pages_path}/.", secure: true)

for album_path in album_paths
  album_name = album_path.split('/').last
  file_name = album_name + ".md"
  p "Generating file #{file_name}..."
  file_path = "#{album_pages_path}/#{file_name}"

  File.open(file_path, "w") do |file|
    front_matter = create_front_matter(album_name)
    for f in front_matter
      file.puts(f)
    end
  end

end
