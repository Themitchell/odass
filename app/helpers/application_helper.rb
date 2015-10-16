module ApplicationHelper
  def nav_link_to(link_text, link_path, options={})
    options[:class] = current_page?(link_path) ? "current #{options[:class]}" : options[:class]

    link_to link_text, link_path, options
  end
end
