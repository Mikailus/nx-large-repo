module.exports = {
  name: 'app0-lib1-childlib5',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/app0/lib1/childlib5',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
