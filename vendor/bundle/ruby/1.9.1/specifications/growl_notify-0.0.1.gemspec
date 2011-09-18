# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{growl_notify}
  s.version = "0.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Scott Davis"]
  s.date = %q{2011-03-17}
  s.description = %q{  This gem is based on the rp-appscript bindings to applescript
  Benefits over all other growl gems: The user doesn't need to do anything but install the gem - no growl settings need to be changed and growlnotify cli doesn't need to be installed
}
  s.email = ["jetviper21@gmail.com"]
  s.files = ["spec/growl_icon.png", "spec/growl_notify_spec.rb", "spec/spec_helper.rb"]
  s.homepage = %q{https://github.com/jetviper21/growl_notify}
  s.require_paths = ["lib"]
  s.rubygems_version = %q{1.6.2}
  s.summary = %q{Growl.info Library that uses applescipt bindings to interface with growl}
  s.test_files = ["spec/growl_icon.png", "spec/growl_notify_spec.rb", "spec/spec_helper.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rb-appscript>, [">= 0"])
      s.add_development_dependency(%q<rspec>, [">= 0"])
      s.add_development_dependency(%q<autotest>, [">= 0"])
    else
      s.add_dependency(%q<rb-appscript>, [">= 0"])
      s.add_dependency(%q<rspec>, [">= 0"])
      s.add_dependency(%q<autotest>, [">= 0"])
    end
  else
    s.add_dependency(%q<rb-appscript>, [">= 0"])
    s.add_dependency(%q<rspec>, [">= 0"])
    s.add_dependency(%q<autotest>, [">= 0"])
  end
end
