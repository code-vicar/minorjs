
/**
 * Copyright 2016 Skytap Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var should         = require('should'),
    FunctionalTest = require('../../lib/functional_test');

describe('/frames', function () {
  FunctionalTest.setup().run();

  it('should successfully load the frames page', function (done) {
    FunctionalTest.browser.visit(FunctionalTest.getUrl('/frames'))
      .then(function () {
        FunctionalTest.browser.location.pathname.should.eql('/frames');
        FunctionalTest.browser.text('.name').should.eql('Hello: Jane Smith');
        done();
      })
      .done();
  });
});
