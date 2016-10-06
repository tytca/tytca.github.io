class ActiveTag < Liquid::Tag
  def initialize(tag_name, input, tokens)
    super
    @input = input.strip
  end

  def lookup(context, name)
     lookup = context
     name.split(".").each { |value| lookup = lookup[value] }
     lookup
   end

  def render(context)
    page_url = "#{lookup(context, 'page.url')}"
    output = page_url.include?(@input) ? 'active' : ''
    return output
  end
end
Liquid::Template.register_tag('active', ActiveTag)
