# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "growl_notify/version"

Gem::Specification.new do |s|
  s.name        = "growl_notify"
  s.version     = GrowlNotify::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Scott Davis"]
  s.email       = ["jetviper21@gmail.com"]
  s.homepage    = "https://github.com/jetviper21/growl_notify"
  s.summary     = %q{Growl.info Library that uses applescipt bindings to interface with growl}
  s.description = <<-DESC
  This gem is based on the rp-appscript bindings to applescript
  Benefits over all other growl gems: The user doesn't need to do anything but install the gem - no growl settings need to be changed and growlnotify cli doesn't need to be installed
  DESC

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]
  s.add_dependency 'rb-appscript'
  s.add_development_dependency 'rspec'
  s.add_development_dependency 'autotest'
  
end
