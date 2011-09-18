# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{compass-growl}
  s.version = "0.0.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.6") if s.respond_to? :required_rubygems_version=
  s.authors = ["Scott Davis"]
  s.date = %q{2011-04-27}
  s.description = %q{Add growl notifications for compass}
  s.email = %q{jetviper21@gmail.com}
  s.homepage = %q{http://github.com/jetviper21/compass-growl}
  s.require_paths = ["lib"]
  s.rubygems_version = %q{1.6.2}
  s.summary = %q{Add Growl notifications to compass}

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>, [">= 1.0.0"])
      s.add_development_dependency(%q<rspec>, ["~> 2.0.0"])
      s.add_development_dependency(%q<mocha>, [">= 0"])
      s.add_runtime_dependency(%q<compass>, ["~> 0.11.1"])
      s.add_runtime_dependency(%q<growl_notify>, [">= 0"])
    else
      s.add_dependency(%q<bundler>, [">= 1.0.0"])
      s.add_dependency(%q<rspec>, ["~> 2.0.0"])
      s.add_dependency(%q<mocha>, [">= 0"])
      s.add_dependency(%q<compass>, ["~> 0.11.1"])
      s.add_dependency(%q<growl_notify>, [">= 0"])
    end
  else
    s.add_dependency(%q<bundler>, [">= 1.0.0"])
    s.add_dependency(%q<rspec>, ["~> 2.0.0"])
    s.add_dependency(%q<mocha>, [">= 0"])
    s.add_dependency(%q<compass>, ["~> 0.11.1"])
    s.add_dependency(%q<growl_notify>, [">= 0"])
  end
end
