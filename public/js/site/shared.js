"use strict";

let edShared = (function ()
{
    class Static {

        static CompactScripture() {
            return [
                {
                    "month": 1,
                    "day": 1,
                    "scripture": "Genesis 1:26-27; John1:1-18"
                },
                {
                    "month": 1,
                    "day": 2,
                    "scripture": "John 1:29-34, 43-51"
                },
                {
                    "month": 1,
                    "day": 3,
                    "scripture": "Genesis 6:5-22; John 2:19-25"
                },
                {
                    "month": 1,
                    "day": 4,
                    "scripture": "Genesis 9:8-17; John 3:5-17"
                },
                {
                    "month": 1,
                    "day": 5,
                    "scripture": "Genesis 12:1-7; John 4:34-38"
                },
                {
                    "month": 1,
                    "day": 6,
                    "scripture": "Genesis 15:1-6; John 5:19-24"
                },
                {
                    "month": 1,
                    "day": 7,
                    "scripture": "Genesis 19:15-16; Psalms 3; John 6:8-15"
                },
                {
                    "month": 1,
                    "day": 8,
                    "scripture": "Genesis 21:1-3, 22:15-18; John 7:37-39"
                },
                {
                    "month": 1,
                    "day": 9,
                    "scripture": "Genesis 24:12, 26-27; John 8:12-17"
                },
                {
                    "month": 1,
                    "day": 10,
                    "scripture": "Genesis 25:29-34; John 9:35-41"
                },
                {
                    "month": 1,
                    "day": 11,
                    "scripture": "John 10:6-18"
                },
                {
                    "month": 1,
                    "day": 12,
                    "scripture": "Genesis 30:22-24; John 11:35-44"
                },
                {
                    "month": 1,
                    "day": 13,
                    "scripture": "Genesis 33:1-4; John 12:12-16"
                },
                {
                    "month": 1,
                    "day": 14,
                    "scripture": "John 13:1-11"
                },
                {
                    "month": 1,
                    "day": 15,
                    "scripture": "Genesis 37:3-4; Psalms 7:9-10; John 14:23-31"
                },
                {
                    "month": 1,
                    "day": 16,
                    "scripture": "Genesis 39:1-23; John 15:1-12"
                },
                {
                    "month": 1,
                    "day": 17,
                    "scripture": "Psalms 5:11-12; John 16:5-15"
                },
                {
                    "month": 1,
                    "day": 18,
                    "scripture": "Genesis 45:4-8; John 17:13-26"
                },
                {
                    "month": 1,
                    "day": 19,
                    "scripture": "John 18:15-18, 25-27"
                },
                {
                    "month": 1,
                    "day": 20,
                    "scripture": "Genesis 50:15-21; Psalms 8:1-2; John 19:16-42"
                },
                {
                    "month": 1,
                    "day": 21,
                    "scripture": "Exodus 2:1-10; John 20:1-10"
                },
                {
                    "month": 1,
                    "day": 22,
                    "scripture": "Exodus 3:1-17; John 21:1-14"
                },
                {
                    "month": 1,
                    "day": 23,
                    "scripture": "Exodus 6:6-7, 7:1-7; John 21:15-25"
                },
                {
                    "month": 1,
                    "day": 24,
                    "scripture": "Exodus 11:9-10; Acts 1:4-11"
                },
                {
                    "month": 1,
                    "day": 25,
                    "scripture": "Exodus 12:12-13, 28-36, Acts 2:1-8"
                },
                {
                    "month": 1,
                    "day": 26,
                    "scripture": "Exodus 14:5-14, 21-31; Acts 32-47"
                },
                {
                    "month": 1,
                    "day": 27,
                    "scripture": "Exodus 20:1-17; Acts 3:1-10, 16"
                },
                {
                    "month": 1,
                    "day": 28,
                    "scripture": "Psalms 12:5-6; Acts 4:24-37"
                },
                {
                    "month": 1,
                    "day": 29,
                    "scripture": "Psalms 14:5-7; Acts 5:12-20"
                },
                {
                    "month": 1,
                    "day": 30,
                    "scripture": "Acts 6:1-15"
                },
                {
                    "month": 1,
                    "day": 31,
                    "scripture": "Exodus 29:44-46; Acts 7:54-60"
                },
                {
                    "month": 2,
                    "day": 1,
                    "scripture": "Exodus 32:1-4, 7-10; Acts 8:4-13"
                },
                {
                    "month": 2,
                    "day": 2,
                    "scripture": "Exodus. 33:9-11; Acts 9:17-20, 31-43"
                },
                {
                    "month": 2,
                    "day": 3,
                    "scripture": "Acts 10:34-48"
                },
                {
                    "month": 2,
                    "day": 4,
                    "scripture": "Psalms 19:7-14; Acts 11:19-24"
                },
                {
                    "month": 2,
                    "day": 5,
                    "scripture": "Exodus. 40:34-35; Psalms 15; Acts 12:5-11"
                },
                {
                    "month": 2,
                    "day": 6,
                    "scripture": "Acts 13:21-22, 42-52"
                },
                {
                    "month": 2,
                    "day": 7,
                    "scripture": "Acts 14:8-23"
                },
                {
                    "month": 2,
                    "day": 8,
                    "scripture": "Leviticus 9:23-24; Acts 15:8-11, 36-41"
                },
                {
                    "month": 2,
                    "day": 9,
                    "scripture": "Leviticus 10:1-3; Acts 16:16-18, 25-36"
                },
                {
                    "month": 2,
                    "day": 10,
                    "scripture": "Acts 17:24-34"
                },
                {
                    "month": 2,
                    "day": 11,
                    "scripture": "Acts 18:9-16, 24-28"
                },
                {
                    "month": 2,
                    "day": 12,
                    "scripture": "Proverbs 4:18-27; Psalms 13; Acts 19:8-12"
                },
                {
                    "month": 2,
                    "day": 13,
                    "scripture": "Proverbs 5:15-23; Acts 20:28-38"
                },
                {
                    "month": 2,
                    "day": 14,
                    "scripture": "Proverbs 6:16-22; Psalms 24; Acts 21:8-14"
                },
                {
                    "month": 2,
                    "day": 15,
                    "scripture": "Proverbs 10:1-13; Psalms 25:1-15; Acts 22:1-21"
                },
                {
                    "month": 2,
                    "day": 16,
                    "scripture": "Proverbs 11:24-31; Acts 23:6-24"
                },
                {
                    "month": 2,
                    "day": 17,
                    "scripture": "Acts 24:14-27"
                },
                {
                    "month": 2,
                    "day": 18,
                    "scripture": "Acts 25:7-27"
                },
                {
                    "month": 2,
                    "day": 19,
                    "scripture": "Numbers 6:24-26; Psalms 22:9-11; Acts 26:12-18"
                },
                {
                    "month": 2,
                    "day": 20,
                    "scripture": "Psalms 23:1-6; Acts 27:13-26"
                },
                {
                    "month": 2,
                    "day": 21,
                    "scripture": "Numbers 9:15-23; Acts 28:3-5, 30-31"
                },
                {
                    "month": 2,
                    "day": 22,
                    "scripture": "Psalms 27:4-6; Mark 1:9-18"
                },
                {
                    "month": 2,
                    "day": 23,
                    "scripture": "Numbers 13:1-2, 25-33; Mark 2:13-17"
                },
                {
                    "month": 2,
                    "day": 24,
                    "scripture": "Numbers 14:6-25; Mark 3:1-6, 13-15"
                },
                {
                    "month": 2,
                    "day": 25,
                    "scripture": "Psalms 29:10-11; Mark 4:21-25, 35-41"
                },
                {
                    "month": 2,
                    "day": 26,
                    "scripture": "Psalms 28:6-9; Mark 5:24-29, 35-43"
                },
                {
                    "month": 2,
                    "day": 27,
                    "scripture": "Mark 6:12-13, 30-44"
                },
                {
                    "month": 2,
                    "day": 28,
                    "scripture": "1 Corinthians 13:4-13"
                },
                {
                    "month": 2,
                    "day": 29,
                    "scripture": ""
                },
                {
                    "month": 3,
                    "day": 1,
                    "scripture": "Numbers 30:1-2; Mark 9:20-29"
                },
                {
                    "month": 3,
                    "day": 2,
                    "scripture": "Numbers 32:11-13; Mark 10:13-27"
                },
                {
                    "month": 3,
                    "day": 3,
                    "scripture": "Numbers. 35:33-34; Mark. 11:15-17, 22-25"
                },
                {
                    "month": 3,
                    "day": 4,
                    "scripture": "Deuteronomy 1:29-36; Mark 12:29-31"
                },
                {
                    "month": 3,
                    "day": 5,
                    "scripture": "Deuteronomy 4:9, 23-31; Psalms 36:5-10; Mark 13:32-37"
                },
                {
                    "month": 3,
                    "day": 6,
                    "scripture": "Deuteronomy 5:32-33; Psalms 43; Mark 14:3-9"
                },
                {
                    "month": 3,
                    "day": 7,
                    "scripture": "Deuteronomy 8:1-6; Mark 15:16-24"
                },
                {
                    "month": 3,
                    "day": 8,
                    "scripture": "Deuteronomy 10:12-14; Mark 16:15-20"
                },
                {
                    "month": 3,
                    "day": 9,
                    "scripture": "Deuteronomy 15:7-8; Galatians 1:3-12"
                },
                {
                    "month": 3,
                    "day": 10,
                    "scripture": "Deuteronomy 18:9-13; Psalms 38:12-22; Galatians 2:20"
                },
                {
                    "month": 3,
                    "day": 11,
                    "scripture": "Deuteronomy 20:3-4; Galatians 3:10-25"
                },
                {
                    "month": 3,
                    "day": 12,
                    "scripture": "Deuteronomy 23:14, 21-23; Galatians 4:6-7, 24-31"
                },
                {
                    "month": 3,
                    "day": 13,
                    "scripture": "Deuteronomy 26:16-19; Galatians 5:13-14, 16-26"
                },
                {
                    "month": 3,
                    "day": 14,
                    "scripture": "Deuteronomy 28:1-19; Galatians 6:9-10"
                },
                {
                    "month": 3,
                    "day": 15,
                    "scripture": "Deuteronomy 31:5-6; Psalms 40:1-5; 1 Corinthians 1:18-25"
                },
                {
                    "month": 3,
                    "day": 16,
                    "scripture": "Deuteronomy 33:29; 1 Corinthians 2:9-16"
                },
                {
                    "month": 3,
                    "day": 17,
                    "scripture": "Joshua 1:5-9; Psalms 37:3-26; 1 Corinthians 3:5-6"
                },
                {
                    "month": 3,
                    "day": 18,
                    "scripture": "Joshua 3:9-17; 1 Corinthians 4:4-5"
                },
                {
                    "month": 3,
                    "day": 19,
                    "scripture": "Joshua 7:10-12; 1 Corinthians 5:1-13"
                },
                {
                    "month": 3,
                    "day": 20,
                    "scripture": "Joshua 10:8-15; 1 Corinthians 6:9-11, 18-20"
                },
                {
                    "month": 3,
                    "day": 21,
                    "scripture": "Joshua 14:6-15; 1 Corinthians 7:18-19, 32-35"
                },
                {
                    "month": 3,
                    "day": 22,
                    "scripture": "1 Corinthians 8:1-13"
                },
                {
                    "month": 3,
                    "day": 23,
                    "scripture": "Joshua 20:1-3, 9; 1 Corinthians 9:24-27"
                },
                {
                    "month": 3,
                    "day": 24,
                    "scripture": "Joshua 21:43-45; Psalms 47:1-4; 1 Corinthians 10:12-14"
                },
                {
                    "month": 3,
                    "day": 25,
                    "scripture": "Joshua 23:6-16; 1 Corinthians 11:23-26"
                },
                {
                    "month": 3,
                    "day": 26,
                    "scripture": "1 Corinthians 12:4-28"
                },
                {
                    "month": 3,
                    "day": 27,
                    "scripture": "Judges 4:4-24; 1 Corinthians 13:4-13"
                },
                {
                    "month": 3,
                    "day": 28,
                    "scripture": "Psalms 52:8-9; 1 Corinthians 14:1-19"
                },
                {
                    "month": 3,
                    "day": 29,
                    "scripture": "Psalms 42:1, 8; 1 Corinthians 15:1-11"
                },
                {
                    "month": 3,
                    "day": 30,
                    "scripture": "Psalms 49:1-9, 15-19; 1 Corinthians 16:10--14, 22-24"
                },
                {
                    "month": 3,
                    "day": 31,
                    "scripture": "2 Corinthians 1:3-11, 18-24"
                },
                {
                    "month": 4,
                    "day": 1,
                    "scripture": "Judges 13:1-5; 2 Corinthians 2:14-17, 24"
                },
                {
                    "month": 4,
                    "day": 2,
                    "scripture": "Psalms 89:5-18; 2 Corinthians 3:16-18"
                },
                {
                    "month": 4,
                    "day": 3,
                    "scripture": "2 Corinthians 4:6-18"
                },
                {
                    "month": 4,
                    "day": 4,
                    "scripture": "Psalms 61:1-3; 2 Corinthians 5:6-21"
                },
                {
                    "month": 4,
                    "day": 5,
                    "scripture": "Psalms 64:9-10; Ruth 3:1-11; 2 Corinthians 6:14-18"
                },
                {
                    "month": 4,
                    "day": 6,
                    "scripture": "Psalms 66; 2 Corinthians 7:10-11"
                },
                {
                    "month": 4,
                    "day": 7,
                    "scripture": "Psalms 77:11-14; 2 Corinthians 8:1-12"
                },
                {
                    "month": 4,
                    "day": 8,
                    "scripture": "1 Samuel 7:3-4; Psalms 72:12-14; 2 Corinthians 9:6-9"
                },
                {
                    "month": 4,
                    "day": 9,
                    "scripture": "1 Samuel 9:15-17; 2 Corinthians 10:3-8"
                },
                {
                    "month": 4,
                    "day": 10,
                    "scripture": "1 Samuel 12:14-25; 2 Corinthians 11:2-5, 13-15"
                },
                {
                    "month": 4,
                    "day": 11,
                    "scripture": "1 Samuel 13:11-14; 2 Corinthians 12:9-21"
                },
                {
                    "month": 4,
                    "day": 12,
                    "scripture": "1 Samuel 14:1-23; 2 Corinthians 13:11-14"
                },
                {
                    "month": 4,
                    "day": 13,
                    "scripture": "1 Samuel 15:11, 16:1, 7-13; Matthew 1:21-23"
                },
                {
                    "month": 4,
                    "day": 14,
                    "scripture": "1 Samuel 17:45-51; Psalms 9:1-10; Matthew 2:7-11"
                },
                {
                    "month": 4,
                    "day": 15,
                    "scripture": "1 Samuel 18:12-16; Psalms 11:4-7; Matthew 3:16-17"
                },
                {
                    "month": 4,
                    "day": 16,
                    "scripture": "Psalms 59:9-17; Matthew 4:18-24"
                },
                {
                    "month": 4,
                    "day": 17,
                    "scripture": "Psalms 34:15-22; Matthew 5:13-16"
                },
                {
                    "month": 4,
                    "day": 18,
                    "scripture": "Psalms 17:6-15; Matthew 6:9-13"
                },
                {
                    "month": 4,
                    "day": 19,
                    "scripture": "Psalms 31:14-19; Matthew 7:7-12"
                },
                {
                    "month": 4,
                    "day": 20,
                    "scripture": "Psalms 57:2-3; Matthew 8:2-13"
                },
                {
                    "month": 4,
                    "day": 21,
                    "scripture": "Psalms 63; Matthew 9:20-22"
                },
                {
                    "month": 4,
                    "day": 22,
                    "scripture": "Psalms 141:8-10; Matthew 10:30-42"
                },
                {
                    "month": 4,
                    "day": 23,
                    "scripture": "Psalms 109:21-31; Matthew 11:28-30"
                },
                {
                    "month": 4,
                    "day": 24,
                    "scripture": "1 Chronicles 10:13-14; Matthew 12:33-37, 46-50"
                },
                {
                    "month": 4,
                    "day": 25,
                    "scripture": "Psalms 140:6-13; Matthew 13:45-50"
                },
                {
                    "month": 4,
                    "day": 26,
                    "scripture": "Psalms 142:5; Matthew 14:14-36"
                },
                {
                    "month": 4,
                    "day": 27,
                    "scripture": "Matthew 15:18-19, 22-38"
                },
                {
                    "month": 4,
                    "day": 28,
                    "scripture": "Psalms 139:23-24; Matthew 16:13-28"
                },
                {
                    "month": 4,
                    "day": 29,
                    "scripture": "Psalms 68:1-6; Matthew 17:14-27"
                },
                {
                    "month": 4,
                    "day": 30,
                    "scripture": "Matthew 18:2-6, 10-22"
                },
                {
                    "month": 5,
                    "day": 1,
                    "scripture": "Matthew 19:13-26; Psalms 106:6-12"
                },
                {
                    "month": 5,
                    "day": 2,
                    "scripture": "Matthew 20:25-34; Psalms 2:10-12; 1 Chronicles 17:20"
                },
                {
                    "month": 5,
                    "day": 3,
                    "scripture": "Matthew 21:21-22, 28-46"
                },
                {
                    "month": 5,
                    "day": 4,
                    "scripture": "Matthew 22:37-39; Psalms 20"
                },
                {
                    "month": 5,
                    "day": 5,
                    "scripture": "Matthew 23:11-12, 25-33; Psalms 51:10-12"
                },
                {
                    "month": 5,
                    "day": 6,
                    "scripture": "Matthew 24:35-51"
                },
                {
                    "month": 5,
                    "day": 7,
                    "scripture": "Matthew 25:31-46; Psalms 32:7-8"
                },
                {
                    "month": 5,
                    "day": 8,
                    "scripture": "Matthew 26:36-42; Psalms 71:1-8"
                },
                {
                    "month": 5,
                    "day": 9,
                    "scripture": "Matthew 27:50-54; Psalms 56:3-13"
                },
                {
                    "month": 5,
                    "day": 10,
                    "scripture": "Matthew 28:5-7, 18-20; Psalms 55:12-23"
                },
                {
                    "month": 5,
                    "day": 11,
                    "scripture": "1 Thessalonians 1:1-10; 2 Samuel 22:2-4"
                },
                {
                    "month": 5,
                    "day": 12,
                    "scripture": "1 Thessalonians 2:4-20; Psalms 30:4-5"
                },
                {
                    "month": 5,
                    "day": 13,
                    "scripture": "1 Thessalonians 3:1-13; 1 Chronicles 22:11-13"
                },
                {
                    "month": 5,
                    "day": 14,
                    "scripture": "1 Thessalonians 4:9-18"
                },
                {
                    "month": 5,
                    "day": 15,
                    "scripture": "1 Thessalonians 5:14-18; Psalms 91; 1 Chronicles 28:9"
                },
                {
                    "month": 5,
                    "day": 16,
                    "scripture": "2 Thessalonians 1:3-4; Psalms 95; 1 Chronicles 29:13-14"
                },
                {
                    "month": 5,
                    "day": 17,
                    "scripture": "2 Thessalonians 2:16-17; Psalms 78:11-25; 1 Kings 3:5-14"
                },
                {
                    "month": 5,
                    "day": 18,
                    "scripture": "2 Thessalonians 3:3-18"
                },
                {
                    "month": 5,
                    "day": 19,
                    "scripture": "Romans 1:18-32; Psalms 97:10-12; 1 Kings 6:11-13"
                },
                {
                    "month": 5,
                    "day": 20,
                    "scripture": "Romans 2:21-29; Psalms 98:1-9"
                },
                {
                    "month": 5,
                    "day": 21,
                    "scripture": "Romans 3:23-26; 1 Kings 8:56-61"
                },
                {
                    "month": 5,
                    "day": 22,
                    "scripture": "Romans 4:18-25; Psalms 135:1-3; 2 Chronicles 7:14"
                },
                {
                    "month": 5,
                    "day": 23,
                    "scripture": "Romans 5:6-11; Psalms 136:1-9"
                },
                {
                    "month": 5,
                    "day": 24,
                    "scripture": "Romans 6:11-23; 1 Kings 11:9-11"
                },
                {
                    "month": 5,
                    "day": 25,
                    "scripture": "Romans 7:21-25; Proverbs 3:1-12"
                },
                {
                    "month": 5,
                    "day": 26,
                    "scripture": "Romans 8:1-9; Proverbs 6:16-24"
                },
                {
                    "month": 5,
                    "day": 27,
                    "scripture": "Romans 9:11-21; Proverbs 9:9-12"
                },
                {
                    "month": 5,
                    "day": 28,
                    "scripture": "Romans 10:8-13; Proverbs 12:1-13"
                },
                {
                    "month": 5,
                    "day": 29,
                    "scripture": "Romans 11:36; Proverbs 15:1-16"
                },
                {
                    "month": 5,
                    "day": 30,
                    "scripture": "Romans 12:1-2; Proverbs 18:1-24"
                },
                {
                    "month": 5,
                    "day": 31,
                    "scripture": "Romans 13:8-9; Proverbs 19"
                },
                {
                    "month": 6,
                    "day": 1,
                    "scripture": "Romans 14:10-12; Proverbs 22"
                },
                {
                    "month": 6,
                    "day": 2,
                    "scripture": "Romans 15:1-7; Proverbs 25:21-22, 27:1-2"
                },
                {
                    "month": 6,
                    "day": 3,
                    "scripture": "Romans 16:17-20; Proverbs 29:23-27; Psalms 60:12"
                },
                {
                    "month": 6,
                    "day": 4,
                    "scripture": "Proverbs 30:5; Psalms 33:18-22; Ephesians 1:1-14"
                },
                {
                    "month": 6,
                    "day": 5,
                    "scripture": "Ecclesiastes 3:1-11; Psalms 45:1-7; Ephesians 2:8-10"
                },
                {
                    "month": 6,
                    "day": 6,
                    "scripture": "Ecclesiastes 5:1-7; Psalms 18:1-3; Ephesians 3:20-21"
                },
                {
                    "month": 6,
                    "day": 7,
                    "scripture": "Ecclesiastes 7:8-9; Ephesians 4:2-13"
                },
                {
                    "month": 6,
                    "day": 8,
                    "scripture": "Ecclesiastes 12:13-14; Ephesians 5:1-21"
                },
                {
                    "month": 6,
                    "day": 9,
                    "scripture": "Ephesians 6:1-3, 6-24"
                },
                {
                    "month": 6,
                    "day": 10,
                    "scripture": "Philippians 1:4-18"
                },
                {
                    "month": 6,
                    "day": 11,
                    "scripture": "Philippians 2:3-18"
                },
                {
                    "month": 6,
                    "day": 12,
                    "scripture": "Philippians 3:7-21"
                },
                {
                    "month": 6,
                    "day": 13,
                    "scripture": "Philippians 4:4-13"
                },
                {
                    "month": 6,
                    "day": 14,
                    "scripture": "Colossians 1:15-23"
                },
                {
                    "month": 6,
                    "day": 15,
                    "scripture": "1 Kings 17:1-16; Colossians 2:13-15"
                },
                {
                    "month": 6,
                    "day": 16,
                    "scripture": "1 Kings 21:25-29; Colossians 3:20, 23-25"
                },
                {
                    "month": 6,
                    "day": 17,
                    "scripture": "Colossians 4:2-11,"
                },
                {
                    "month": 6,
                    "day": 18,
                    "scripture": "2 Kings 2:8; 1 Timothy 1:12-19"
                },
                {
                    "month": 6,
                    "day": 19,
                    "scripture": "2 Kings 4:32-37; 1 Timothy 2:5-11"
                },
                {
                    "month": 6,
                    "day": 20,
                    "scripture": "2 Kings 6:4-7; 1 Timothy 3:8-16"
                },
                {
                    "month": 6,
                    "day": 21,
                    "scripture": "1 Timothy 4:7-16"
                },
                {
                    "month": 6,
                    "day": 22,
                    "scripture": "1 Timothy 5:1-10"
                },
                {
                    "month": 6,
                    "day": 23,
                    "scripture": "2 Chronicles 24:17-20; 1 Timothy 6:6-12"
                },
                {
                    "month": 6,
                    "day": 24,
                    "scripture": "Joel 2:28-30; 2 Timothy 1:6-14"
                },
                {
                    "month": 6,
                    "day": 25,
                    "scripture": "2 Timothy 2:13-26"
                },
                {
                    "month": 6,
                    "day": 26,
                    "scripture": "2 Kings 13:20-21; 2 Timothy 3:14-17"
                },
                {
                    "month": 6,
                    "day": 27,
                    "scripture": "Amos 3:1-2; Psalms 80:1-3; 2 Timothy 4:1-5, 17-18"
                },
                {
                    "month": 6,
                    "day": 28,
                    "scripture": "Amos 5:14-15; Psalms 86:9-17; Titus 1:15-16"
                },
                {
                    "month": 6,
                    "day": 29,
                    "scripture": "Amos 9:13-15; Psalms 104:33-35; Titus 2:11-15"
                },
                {
                    "month": 6,
                    "day": 30,
                    "scripture": "Isaiah 1:18-20, Titus 3:1-15"
                },
                {
                    "month": 7,
                    "day": 1,
                    "scripture": "Isaiah 5:15-16; Psalms 115:9-18; Jude :21-23"
                },
                {
                    "month": 7,
                    "day": 2,
                    "scripture": "Isaiah 6:1-8; Philemon 4-6"
                },
                {
                    "month": 7,
                    "day": 3,
                    "scripture": "Hebrews 1:1-14"
                },
                {
                    "month": 7,
                    "day": 4,
                    "scripture": "Hosea 2:19-20; Hebrews 2:14-18"
                },
                {
                    "month": 7,
                    "day": 5,
                    "scripture": "Hosea 6:1-13; Hebrews 3:12-19"
                },
                {
                    "month": 7,
                    "day": 6,
                    "scripture": "Hosea 10:12; Psalms 73:23-38; Hebrews 4:12-16"
                },
                {
                    "month": 7,
                    "day": 7,
                    "scripture": "Hosea 13:4; Psalms 100; Hebrews 5:7-14"
                },
                {
                    "month": 7,
                    "day": 8,
                    "scripture": "Micah 4:2; Hebrews 6:13-20"
                },
                {
                    "month": 7,
                    "day": 9,
                    "scripture": "Micah 5:4-5; Hebrews 7:18-28"
                },
                {
                    "month": 7,
                    "day": 10,
                    "scripture": "Isaiah 9:6-7; Hebrews 8:1-13"
                },
                {
                    "month": 7,
                    "day": 11,
                    "scripture": "Isaiah 11:1-5, 14:27; Hebrews 9:11-15"
                },
                {
                    "month": 7,
                    "day": 12,
                    "scripture": "Hebrews 10:22-39"
                },
                {
                    "month": 7,
                    "day": 13,
                    "scripture": "Hebrews 11:1-16"
                },
                {
                    "month": 7,
                    "day": 14,
                    "scripture": "Hebrews 12:1-13"
                },
                {
                    "month": 7,
                    "day": 15,
                    "scripture": "Isaiah 25:1-5; Hebrews 13:5-17"
                },
                {
                    "month": 7,
                    "day": 16,
                    "scripture": "James 1:2-18"
                },
                {
                    "month": 7,
                    "day": 17,
                    "scripture": "Isaiah 33:5-6; James 2:8, 18-26"
                },
                {
                    "month": 7,
                    "day": 18,
                    "scripture": "Psalms 46:1-5; James 3:7-10, 13-18"
                },
                {
                    "month": 7,
                    "day": 19,
                    "scripture": "2 Chronicles 31:20-21; James 4:6-17"
                },
                {
                    "month": 7,
                    "day": 20,
                    "scripture": "2 Chronicles 32:7-8; James 5:7-20"
                },
                {
                    "month": 7,
                    "day": 21,
                    "scripture": "Isaiah 37:14-20; Psalms 76:11; 1 Peter 1:3-9"
                },
                {
                    "month": 7,
                    "day": 22,
                    "scripture": "Psalms 75:9-10; 1 Peter 2:1-10"
                },
                {
                    "month": 7,
                    "day": 23,
                    "scripture": "Isaiah 40:10-13, 31; 1 Peter 3:8-17"
                },
                {
                    "month": 7,
                    "day": 24,
                    "scripture": "Isaiah 43:1-2; 1 Peter 4:7-19"
                },
                {
                    "month": 7,
                    "day": 25,
                    "scripture": "Isaiah 46:9-10; 1 Peter 5:5-14"
                },
                {
                    "month": 7,
                    "day": 26,
                    "scripture": "Isaiah 52:7; Psalms 92:10-15; 2 Peter 1:1-11"
                },
                {
                    "month": 7,
                    "day": 27,
                    "scripture": "Isaiah 53:4-12; 2 Peter 2:17-22"
                },
                {
                    "month": 7,
                    "day": 28,
                    "scripture": "Isaiah 58:6-10; Psalms 103:1-6; 2 Peter 3:9"
                },
                {
                    "month": 7,
                    "day": 29,
                    "scripture": "Isaiah 60:1-3; John 1:1-14"
                },
                {
                    "month": 7,
                    "day": 30,
                    "scripture": "Isaiah 64:8; John 2:1-11"
                },
                {
                    "month": 7,
                    "day": 31,
                    "scripture": "Isaiah 65:17-25; John 3:16-21"
                },
                {
                    "month": 8,
                    "day": 1,
                    "scripture": "2 Chronicles 33:9-13; John 4:34-35, 46-54"
                },
                {
                    "month": 8,
                    "day": 2,
                    "scripture": "Nahum 1:7; John 5:19-30"
                },
                {
                    "month": 8,
                    "day": 3,
                    "scripture": "John 6:35-38, 44-51, 62-71"
                },
                {
                    "month": 8,
                    "day": 4,
                    "scripture": "2 Kings 23:24-25; John 7:14-18, 37-46"
                },
                {
                    "month": 8,
                    "day": 5,
                    "scripture": "John 8:12, 31-41"
                },
                {
                    "month": 8,
                    "day": 6,
                    "scripture": "Zephaniah 3:17; John 9:1-11"
                },
                {
                    "month": 8,
                    "day": 7,
                    "scripture": "Jeremiah 1:4-5; John 10:6-15"
                },
                {
                    "month": 8,
                    "day": 8,
                    "scripture": "Jeremiah 4:1-4; John 11:17-27, 43-44"
                },
                {
                    "month": 8,
                    "day": 9,
                    "scripture": "Jeremiah 5:21-22; John 12:23-33"
                },
                {
                    "month": 8,
                    "day": 10,
                    "scripture": "Jeremiah 7:23-26; John 13:31-35"
                },
                {
                    "month": 8,
                    "day": 11,
                    "scripture": "Jeremiah 10:6-7; John 14:1-14"
                },
                {
                    "month": 8,
                    "day": 12,
                    "scripture": "Jeremiah 15:19-21; John 15:1-17"
                },
                {
                    "month": 8,
                    "day": 13,
                    "scripture": "Jeremiah 17:7-8; Psalms 96:7-13; John 16:5-11"
                },
                {
                    "month": 8,
                    "day": 14,
                    "scripture": "Jeremiah 18:5-6; Psalms 93; John 17:20-26"
                },
                {
                    "month": 8,
                    "day": 15,
                    "scripture": "Jeremiah 22:3; Psalms 112; John 18:36-37"
                },
                {
                    "month": 8,
                    "day": 16,
                    "scripture": "Jeremiah 25:5-7; John 19:1-3, 16-20"
                },
                {
                    "month": 8,
                    "day": 17,
                    "scripture": "Jeremiah 35:15; John 20:1-9, 24-29"
                },
                {
                    "month": 8,
                    "day": 18,
                    "scripture": "Psalms 105:1-11; John 21:15-19"
                },
                {
                    "month": 8,
                    "day": 19,
                    "scripture": "Psalms 67; 1 John 1"
                },
                {
                    "month": 8,
                    "day": 20,
                    "scripture": "Jeremiah 24:7; Psalms 118:1-9; 1 John 2:15-17"
                },
                {
                    "month": 8,
                    "day": 21,
                    "scripture": "Jeremiah 29:11-13; 1 John 3:1-11"
                },
                {
                    "month": 8,
                    "day": 22,
                    "scripture": "Jeremiah 32:17; 1 John 4:7-21"
                },
                {
                    "month": 8,
                    "day": 23,
                    "scripture": "Jeremiah 33:6-9; 1 John 5:3-12"
                },
                {
                    "month": 8,
                    "day": 24,
                    "scripture": "Jeremiah 38:20; 2 John"
                },
                {
                    "month": 8,
                    "day": 25,
                    "scripture": "Jeremiah 51:15-19; 3 John"
                },
                {
                    "month": 8,
                    "day": 26,
                    "scripture": "Psalms 143:8-10, 144:1-2; Revelation 1:4-8"
                },
                {
                    "month": 8,
                    "day": 27,
                    "scripture": "Ezekiel 3:22-23; Revelation 2:1-11"
                },
                {
                    "month": 8,
                    "day": 28,
                    "scripture": "Revelation 3:7-22"
                },
                {
                    "month": 8,
                    "day": 29,
                    "scripture": "Ezekiel 11:19-21; Revelation 4:1-11"
                },
                {
                    "month": 8,
                    "day": 30,
                    "scripture": "Ezekiel 14:12-14; Revelation 5:1-14"
                },
                {
                    "month": 8,
                    "day": 31,
                    "scripture": "Ezekiel 16:49-50; Psalms 70; Revelation 6"
                },
                {
                    "month": 9,
                    "day": 1,
                    "scripture": "Ezekiel 18:30-32; Revelation 7:9-17"
                },
                {
                    "month": 9,
                    "day": 2,
                    "scripture": "Ezekiel 20:38-44; Psalms 111:1-10; Revelation 8:3-4"
                },
                {
                    "month": 9,
                    "day": 3,
                    "scripture": "Ezekiel 22:30, 23:28-30; Revelation 9:20-21"
                },
                {
                    "month": 9,
                    "day": 4,
                    "scripture": "Ezekiel 28:25-26; Revelation 10"
                },
                {
                    "month": 9,
                    "day": 5,
                    "scripture": "Ezekiel 31:10-14; Revelation 11:15-19"
                },
                {
                    "month": 9,
                    "day": 6,
                    "scripture": "2 Chronicles 36:22-23; Revelation 12:10-17"
                },
                {
                    "month": 9,
                    "day": 7,
                    "scripture": "Jeremiah 42:1-6; Psalms 48; Revelation 13:6-8"
                },
                {
                    "month": 9,
                    "day": 8,
                    "scripture": "Revelation 14:4-5, 12-20"
                },
                {
                    "month": 9,
                    "day": 9,
                    "scripture": "Lamentations 3:22-26; Revelation 15"
                },
                {
                    "month": 9,
                    "day": 10,
                    "scripture": "Daniel 1:17-21; Revelation 16:15-21"
                },
                {
                    "month": 9,
                    "day": 11,
                    "scripture": "Daniel 3:16-18, 25-30; Psalms 81:9-10; Revelation 17:4"
                },
                {
                    "month": 9,
                    "day": 12,
                    "scripture": "Ezekiel 33:10-11; Revelation 18:1-10"
                },
                {
                    "month": 9,
                    "day": 13,
                    "scripture": "Ezekiel 36:25-27; Psalms 110; Revelation 19:4-9"
                },
                {
                    "month": 9,
                    "day": 14,
                    "scripture": "Psalms 145:8-21; Revelation 20:11-15"
                },
                {
                    "month": 9,
                    "day": 15,
                    "scripture": "Psalms 128; Revelation 21:1-8"
                },
                {
                    "month": 9,
                    "day": 16,
                    "scripture": "Ezekiel 43:1-5; Revelation 22:12-21"
                },
                {
                    "month": 9,
                    "day": 17,
                    "scripture": "Ezekiel 45:9-10; Luke 1:35-45"
                },
                {
                    "month": 9,
                    "day": 18,
                    "scripture": "Luke 2:6-20"
                },
                {
                    "month": 9,
                    "day": 19,
                    "scripture": "Daniel 6:3-12, 16-24; Luke 3:15-16"
                },
                {
                    "month": 9,
                    "day": 20,
                    "scripture": "Luke 4:18-19, 33-44"
                },
                {
                    "month": 9,
                    "day": 21,
                    "scripture": "Luke 5:12-13, 15-26"
                },
                {
                    "month": 9,
                    "day": 22,
                    "scripture": "Daniel 12:3; Luke 6:27-38"
                },
                {
                    "month": 9,
                    "day": 23,
                    "scripture": "Psalms 84; Luke 7:20-23"
                },
                {
                    "month": 9,
                    "day": 24,
                    "scripture": "Luke 8:19-39"
                },
                {
                    "month": 9,
                    "day": 25,
                    "scripture": "Luke 9:10-27"
                },
                {
                    "month": 9,
                    "day": 26,
                    "scripture": "Haggai 2:4-5; Luke 10:25-37"
                },
                {
                    "month": 9,
                    "day": 27,
                    "scripture": "Zechariah 3:7; Luke 11:33-36"
                },
                {
                    "month": 9,
                    "day": 28,
                    "scripture": "Zechariah 4:6; Luke 12:22-34"
                },
                {
                    "month": 9,
                    "day": 29,
                    "scripture": "Zechariah 7:8-10; Luke 13:14-17"
                },
                {
                    "month": 9,
                    "day": 30,
                    "scripture": "Psalms 126; Luke 14:25-35"
                },
                {
                    "month": 10,
                    "day": 1,
                    "scripture": "Zechariah 13:8-9; Psalms 147:1-6; Luke 15:10-32"
                },
                {
                    "month": 10,
                    "day": 2,
                    "scripture": "Psalms 138; Luke 16:13, 19-31"
                },
                {
                    "month": 10,
                    "day": 3,
                    "scripture": "Psalms 150; Luke 17:1-6, 11-19"
                },
                {
                    "month": 10,
                    "day": 4,
                    "scripture": "Esther 3:13, 4:8-17, 8:3-11; Luke 18:15-17"
                },
                {
                    "month": 10,
                    "day": 5,
                    "scripture": "Esther 9:1-5; Luke 19:8-10, 36-38"
                },
                {
                    "month": 10,
                    "day": 6,
                    "scripture": "Ezra 7:6, 10, 8:21-23; Luke 20:9-19"
                },
                {
                    "month": 10,
                    "day": 7,
                    "scripture": "Ezra 10:1-6, 10-12; Psalms 131; Luke 21:1-4"
                },
                {
                    "month": 10,
                    "day": 8,
                    "scripture": "Nehemiah 1:5-11; Psalms 133:1"
                },
                {
                    "month": 10,
                    "day": 9,
                    "scripture": "Nehemiah 4:14-23; Luke 23:32-43"
                },
                {
                    "month": 10,
                    "day": 10,
                    "scripture": "Nehemiah 6:15-16; Psalms 146:5-10; Luke 24:44-53"
                },
                {
                    "month": 10,
                    "day": 11,
                    "scripture": "Acts 1:4-14"
                },
                {
                    "month": 10,
                    "day": 12,
                    "scripture": "Nehemiah 9:7-15 Acts 2:1-4, 40-47"
                },
                {
                    "month": 10,
                    "day": 13,
                    "scripture": "Psalms 1; Acts 3:1-10"
                },
                {
                    "month": 10,
                    "day": 14,
                    "scripture": "Malachi 1:11, 14; Acts 4:24-37"
                },
                {
                    "month": 10,
                    "day": 15,
                    "scripture": "Malachi 3:2-4, 6-12; Psalms 148:1-6; Acts 5:12-16"
                },
                {
                    "month": 10,
                    "day": 16,
                    "scripture": "Job 1:21-22; Acts 6"
                },
                {
                    "month": 10,
                    "day": 17,
                    "scripture": "Acts 8:5-8, 9:32-43"
                },
                {
                    "month": 10,
                    "day": 18,
                    "scripture": "Job 5:8-18; Psalms 108:1-6, 13; Acts 10:38"
                },
                {
                    "month": 10,
                    "day": 19,
                    "scripture": "Job 8:20-22; Acts 12:5-17"
                },
                {
                    "month": 10,
                    "day": 20,
                    "scripture": "Job 9:4-14; Acts 13:1-3"
                },
                {
                    "month": 10,
                    "day": 21,
                    "scripture": "Job 11:7-9; Acts 16:25-36"
                },
                {
                    "month": 10,
                    "day": 22,
                    "scripture": "Acts 17:11, 24-28, 18:7-11"
                },
                {
                    "month": 10,
                    "day": 23,
                    "scripture": "Job 15:31; Acts 19:4-6, 8-12"
                },
                {
                    "month": 10,
                    "day": 24,
                    "scripture": "Acts 22:14-19"
                },
                {
                    "month": 10,
                    "day": 25,
                    "scripture": "Job 17:8-9; Acts 26:15-32"
                },
                {
                    "month": 10,
                    "day": 26,
                    "scripture": "Psalms 114; Acts 28:3-10"
                },
                {
                    "month": 10,
                    "day": 27,
                    "scripture": "Job 19:25-27; Mark 1:9-20"
                },
                {
                    "month": 10,
                    "day": 28,
                    "scripture": "Job 20:4-11; Mark 4:30-41"
                },
                {
                    "month": 10,
                    "day": 29,
                    "scripture": "Mark 6:4-13, 45-56"
                },
                {
                    "month": 10,
                    "day": 30,
                    "scripture": "Job 22:21-22; Mark 8:27-38"
                },
                {
                    "month": 10,
                    "day": 31,
                    "scripture": "Psalms 121; Mark 10:27, 35-45"
                },
                {
                    "month": 11,
                    "day": 1,
                    "scripture": "Job 23:10-12; Mark 12:28-34"
                },
                {
                    "month": 11,
                    "day": 2,
                    "scripture": "Job 25:2-3; Mark 14:22-25, 32-36"
                },
                {
                    "month": 11,
                    "day": 3,
                    "scripture": "Mark 15:37-39, 16:9-20"
                },
                {
                    "month": 11,
                    "day": 4,
                    "scripture": "Job 28:28; Galatians 2:15-21"
                },
                {
                    "month": 11,
                    "day": 5,
                    "scripture": "Psalms 120:1-2; Galatians 3:5-14"
                },
                {
                    "month": 11,
                    "day": 6,
                    "scripture": "Galatians 5:22-26, 6:1-10"
                },
                {
                    "month": 11,
                    "day": 7,
                    "scripture": "1 Corinthians 2:9-16"
                },
                {
                    "month": 11,
                    "day": 8,
                    "scripture": "Job 34:21; 1 Corinthians 5:9-13; 6:18-20"
                },
                {
                    "month": 11,
                    "day": 9,
                    "scripture": "1 Corinthians 8:2-13"
                },
                {
                    "month": 11,
                    "day": 10,
                    "scripture": "Psalms 122; 1 Corinthians 9:24-27"
                },
                {
                    "month": 11,
                    "day": 11,
                    "scripture": "1 Corinthians 12:12-31"
                },
                {
                    "month": 11,
                    "day": 12,
                    "scripture": "1 Corinthians 13:4-13, 14:1-5"
                },
                {
                    "month": 11,
                    "day": 13,
                    "scripture": "Psalms 149; 1 Corinthians 15:3-5, 16:13-14"
                },
                {
                    "month": 11,
                    "day": 14,
                    "scripture": "Job 42:1-2; 2 Corinthians 1:3-7, 18-24"
                },
                {
                    "month": 11,
                    "day": 15,
                    "scripture": "2 Corinthians 4: 8-9, 16-18, 5:1-10"
                },
                {
                    "month": 11,
                    "day": 16,
                    "scripture": "2 Corinthians 9:6-15"
                },
                {
                    "month": 11,
                    "day": 17,
                    "scripture": "Psalms 124; 2 Corinthians 12:9-10, 13:11-14"
                },
                {
                    "month": 11,
                    "day": 18,
                    "scripture": "Matthew 1:21-23, 3:11-12, 4:1-11"
                },
                {
                    "month": 11,
                    "day": 19,
                    "scripture": "Matthew 5:13-16, 6:9-15, 7:7-12"
                },
                {
                    "month": 11,
                    "day": 20,
                    "scripture": "Matthew 8:2-3, 9:35-38, 10:37-42"
                },
                {
                    "month": 11,
                    "day": 21,
                    "scripture": "Matthew 11:28-30, 12:9-13, 13:45-50"
                },
                {
                    "month": 11,
                    "day": 22,
                    "scripture": "Matthew 15:18-19, 22-38"
                },
                {
                    "month": 11,
                    "day": 23,
                    "scripture": "Matthew 17:1-21, 18:19-20, 19:21-30"
                },
                {
                    "month": 11,
                    "day": 24,
                    "scripture": "Matthew 20:26-34, 21:18-22"
                },
                {
                    "month": 11,
                    "day": 25,
                    "scripture": "Matthew 23:11-12, 24:45-47, 25:32-46"
                },
                {
                    "month": 11,
                    "day": 26,
                    "scripture": "Psalms 125; Matthew 26:26-29"
                },
                {
                    "month": 11,
                    "day": 27,
                    "scripture": "Matthew 28:18-20; 1 Thessalonians 1:4-6, 3:6-13"
                },
                {
                    "month": 11,
                    "day": 28,
                    "scripture": "1 Thessalonians 5:15-24; 2 Thessalonians 1:3-12"
                },
                {
                    "month": 11,
                    "day": 29,
                    "scripture": "Romans 3:22-26, 4:18-25"
                },
                {
                    "month": 11,
                    "day": 30,
                    "scripture": "Romans 5:8, 6:19-23, 8:28-39"
                },
                {
                    "month": 12,
                    "day": 1,
                    "scripture": "Romans 10:9-11, 12:9-21"
                },
                {
                    "month": 12,
                    "day": 2,
                    "scripture": "Romans 13:8-10, 15:5-13"
                },
                {
                    "month": 12,
                    "day": 3,
                    "scripture": "Ephesians 2:8-10, 3:14-21, 4:20-32"
                },
                {
                    "month": 12,
                    "day": 4,
                    "scripture": "Ephesians 6:1-3, 10-20"
                },
                {
                    "month": 12,
                    "day": 5,
                    "scripture": "Philippians 2:3-18"
                },
                {
                    "month": 12,
                    "day": 6,
                    "scripture": "Colossians 1:15-20, 3:5-17"
                },
                {
                    "month": 12,
                    "day": 7,
                    "scripture": "1 Timothy 1:5, 2:1-6, 3:1-10"
                },
                {
                    "month": 12,
                    "day": 8,
                    "scripture": "Titus 3:1-11"
                },
                {
                    "month": 12,
                    "day": 9,
                    "scripture": "2 Timothy 2:19, 22-26, 3:10-17"
                },
                {
                    "month": 12,
                    "day": 10,
                    "scripture": "Hebrews 3:12-19, 4:9-16"
                },
                {
                    "month": 12,
                    "day": 11,
                    "scripture": "Hebrews 6:18-20, 8:7-13"
                },
                {
                    "month": 12,
                    "day": 12,
                    "scripture": "Hebrews 10:22-25, 35-39"
                },
                {
                    "month": 12,
                    "day": 13,
                    "scripture": "Hebrews 13:5-8; Jude:20-23"
                },
                {
                    "month": 12,
                    "day": 14,
                    "scripture": "James 1:2-18"
                },
                {
                    "month": 12,
                    "day": 15,
                    "scripture": "1 Peter 4:7-19"
                },
                {
                    "month": 12,
                    "day": 16,
                    "scripture": "2 Peter 1:5-11; John 1:1-14"
                },
                {
                    "month": 12,
                    "day": 17,
                    "scripture": "Luke 1:1-25"
                },
                {
                    "month": 12,
                    "day": 18,
                    "scripture": "Luke 1:26-28"
                },
                {
                    "month": 12,
                    "day": 19,
                    "scripture": "Luke 2:1-20"
                },
                {
                    "month": 12,
                    "day": 20,
                    "scripture": "Luke 2:41-52"
                },
                {
                    "month": 12,
                    "day": 21,
                    "scripture": "Luke 3:1-9"
                },
                {
                    "month": 12,
                    "day": 22,
                    "scripture": "Luke 3:15-22"
                },
                {
                    "month": 12,
                    "day": 23,
                    "scripture": "Luke 4:1-13"
                },
                {
                    "month": 12,
                    "day": 24,
                    "scripture": "Luke 5:12-25"
                },
                {
                    "month": 12,
                    "day": 25,
                    "scripture": "Luke 6:20-23"
                },
                {
                    "month": 12,
                    "day": 26,
                    "scripture": "Luke 7:1-10"
                },
                {
                    "month": 12,
                    "day": 27,
                    "scripture": "Luke 8:22-39"
                },
                {
                    "month": 12,
                    "day": 28,
                    "scripture": "Luke 10:1-20"
                },
                {
                    "month": 12,
                    "day": 29,
                    "scripture": "Luke 11:1-12"
                },
                {
                    "month": 12,
                    "day": 30,
                    "scripture": "Luke 12:22-34, 24-48"
                },
                {
                    "month": 12,
                    "day": 31,
                    "scripture": "Luke 13:6-21"
                }
            ]
        }

        static CompleteScripture() {
            return [
                {
                    "month": 1,
                    "day": 1,
                    "scripture": "Genesis 1-2; Luke 1"
                },
                {
                    "month": 1,
                    "day": 2,
                    "scripture": "Genesis 3-5; Luke 2"
                },
                {
                    "month": 1,
                    "day": 3,
                    "scripture": "Genesis 6-8; Luke 3"
                },
                {
                    "month": 1,
                    "day": 4,
                    "scripture": "Genesis 9-11; Luke 4"
                },
                {
                    "month": 1,
                    "day": 5,
                    "scripture": "Genesis 12-14; Luke 5"
                },
                {
                    "month": 1,
                    "day": 6,
                    "scripture": "Genesis 15-17; Luke 6"
                },
                {
                    "month": 1,
                    "day": 7,
                    "scripture": "Genesis 18-19; Psalms 3; Luke 7"
                },
                {
                    "month": 1,
                    "day": 8,
                    "scripture": "Genesis 20-22; Luke 8"
                },
                {
                    "month": 1,
                    "day": 9,
                    "scripture": "Genesis 23-24; Luke 9"
                },
                {
                    "month": 1,
                    "day": 10,
                    "scripture": "Genesis 25-26; Psalms 6; Luke 10"
                },
                {
                    "month": 1,
                    "day": 11,
                    "scripture": "Genesis 27-28; Psalms 4; Luke 11"
                },
                {
                    "month": 1,
                    "day": 12,
                    "scripture": "Genesis 29-30; Luke 12"
                },
                {
                    "month": 1,
                    "day": 13,
                    "scripture": "Genesis 31-33; Luke 13"
                },
                {
                    "month": 1,
                    "day": 14,
                    "scripture": "Genesis 34-36; Luke 14"
                },
                {
                    "month": 1,
                    "day": 15,
                    "scripture": "Genesis 37-38; Psalms 7; Luke 15"
                },
                {
                    "month": 1,
                    "day": 16,
                    "scripture": "Genesis 39-41; Luke 16"
                },
                {
                    "month": 1,
                    "day": 17,
                    "scripture": "Genesis 42-43; Psalms 5; Luke 17"
                },
                {
                    "month": 1,
                    "day": 18,
                    "scripture": "Genesis 44-46; Luke 18"
                },
                {
                    "month": 1,
                    "day": 19,
                    "scripture": "Genesis 47-48; Psalms 10; Luke 19"
                },
                {
                    "month": 1,
                    "day": 20,
                    "scripture": "Genesis 49-50; Psalms 8; Luke 20"
                },
                {
                    "month": 1,
                    "day": 21,
                    "scripture": "Exodus 1-2; Psalms 88; Luke 21"
                },
                {
                    "month": 1,
                    "day": 22,
                    "scripture": "Exodus 3-5; Luke 22"
                },
                {
                    "month": 1,
                    "day": 23,
                    "scripture": "Exodus 6-8; Luke 23"
                },
                {
                    "month": 1,
                    "day": 24,
                    "scripture": "Exodus 9-11; Luke 24"
                },
                {
                    "month": 1,
                    "day": 25,
                    "scripture": "Exodus 12-13; Psalms 21; Acts 1"
                },
                {
                    "month": 1,
                    "day": 26,
                    "scripture": "Exodus 14-16; Acts 2"
                },
                {
                    "month": 1,
                    "day": 27,
                    "scripture": "Exodus 17-20; Acts 3"
                },
                {
                    "month": 1,
                    "day": 28,
                    "scripture": "Exodus 21-22; Psalms 12; Acts 4"
                },
                {
                    "month": 1,
                    "day": 29,
                    "scripture": "Exodus 23-24; Psalms 14; Acts 5"
                },
                {
                    "month": 1,
                    "day": 30,
                    "scripture": "Exodus 25-27; Acts 6"
                },
                {
                    "month": 1,
                    "day": 31,
                    "scripture": "Exodus 28-29; Acts 7"
                },
                {
                    "month": 2,
                    "day": 1,
                    "scripture": "Exodus 30-32; Acts 8"
                },
                {
                    "month": 2,
                    "day": 2,
                    "scripture": "Exodus 33-34; Psalms 16; Acts 9"
                },
                {
                    "month": 2,
                    "day": 3,
                    "scripture": "Exodus 35-36; Acts 10"
                },
                {
                    "month": 2,
                    "day": 4,
                    "scripture": "Exodus 37-38; Psalms 19; Acts 11"
                },
                {
                    "month": 2,
                    "day": 5,
                    "scripture": "Exodus 39-40; Psalms 15; Acts 12"
                },
                {
                    "month": 2,
                    "day": 6,
                    "scripture": "Leviticus 1-3; Acts 13"
                },
                {
                    "month": 2,
                    "day": 7,
                    "scripture": "Leviticus 4-6; Acts 14"
                },
                {
                    "month": 2,
                    "day": 8,
                    "scripture": "Leviticus 7-9; Acts 15"
                },
                {
                    "month": 2,
                    "day": 9,
                    "scripture": "Leviticus 10-12; Acts 16"
                },
                {
                    "month": 2,
                    "day": 10,
                    "scripture": "Leviticus 13-14; Acts 17"
                },
                {
                    "month": 2,
                    "day": 11,
                    "scripture": "Leviticus 15-17; Acts 18"
                },
                {
                    "month": 2,
                    "day": 12,
                    "scripture": "Leviticus 18-19; Psalms 13; Acts 19"
                },
                {
                    "month": 2,
                    "day": 13,
                    "scripture": "Leviticus 20-22; Acts 20"
                },
                {
                    "month": 2,
                    "day": 14,
                    "scripture": "Leviticus 23-24; Psalms 24; Acts 21"
                },
                {
                    "month": 2,
                    "day": 15,
                    "scripture": "Leviticus 25; Psalms 25-26; Acts 22"
                },
                {
                    "month": 2,
                    "day": 16,
                    "scripture": "Leviticus 26-27; Acts 23"
                },
                {
                    "month": 2,
                    "day": 17,
                    "scripture": "Numbers 1-2; Acts 24"
                },
                {
                    "month": 2,
                    "day": 18,
                    "scripture": "Numbers 3-4; Acts 25"
                },
                {
                    "month": 2,
                    "day": 19,
                    "scripture": "Numbers 5-6; Psalms 22; Acts 26"
                },
                {
                    "month": 2,
                    "day": 20,
                    "scripture": "Numbers 7; Psalms 23; Acts 27"
                },
                {
                    "month": 2,
                    "day": 21,
                    "scripture": "Numbers 8-9; Acts 28"
                },
                {
                    "month": 2,
                    "day": 22,
                    "scripture": "Numbers 10-11; Psalms 27; Mark 1"
                },
                {
                    "month": 2,
                    "day": 23,
                    "scripture": "Numbers 12-13; Psalms 90; Mark 2"
                },
                {
                    "month": 2,
                    "day": 24,
                    "scripture": "Numbers 14-16; Mark 3"
                },
                {
                    "month": 2,
                    "day": 25,
                    "scripture": "Numbers 17-18; Psalms 29; Mark 4"
                },
                {
                    "month": 2,
                    "day": 26,
                    "scripture": "Numbers 19-20; Psalms 28; Mark 5"
                },
                {
                    "month": 2,
                    "day": 27,
                    "scripture": "Numbers 21-23; Mark 6-7"
                },
                {
                    "month": 2,
                    "day": 28,
                    "scripture": "Numbers 24-27; 1 Corinthians 13"
                },
                {
                    "month": 2,
                    "day": 29,
                    "scripture": ""
                },
                {
                    "month": 3,
                    "day": 1,
                    "scripture": "Numbers 28-29; Mark 8"
                },
                {
                    "month": 3,
                    "day": 2,
                    "scripture": "Numbers 30-31; Mark 9"
                },
                {
                    "month": 3,
                    "day": 3,
                    "scripture": "Numbers 32-33; Mark 10"
                },
                {
                    "month": 3,
                    "day": 4,
                    "scripture": "Numbers 34-36; Mark 11"
                },
                {
                    "month": 3,
                    "day": 5,
                    "scripture": "Deuteronomy 1-2; Mark 12"
                },
                {
                    "month": 3,
                    "day": 6,
                    "scripture": "Deuteronomy 3-4; Psalms 36 ; Mark 13"
                },
                {
                    "month": 3,
                    "day": 7,
                    "scripture": "Deuteronomy 5-6; Psalms 43 ; Mark 14"
                },
                {
                    "month": 3,
                    "day": 8,
                    "scripture": "Deuteronomy 7-9; Mark 15"
                },
                {
                    "month": 3,
                    "day": 9,
                    "scripture": "Deuteronomy 10-12; Mark 16"
                },
                {
                    "month": 3,
                    "day": 10,
                    "scripture": "Deuteronomy 13-15; Galatians 1"
                },
                {
                    "month": 3,
                    "day": 11,
                    "scripture": "Deuteronomy 16-18; Psalms 38; Galatians 2"
                },
                {
                    "month": 3,
                    "day": 12,
                    "scripture": "Deuteronomy 19-21; Galatians 3"
                },
                {
                    "month": 3,
                    "day": 13,
                    "scripture": "Deuteronomy 22-24; Galatians 4"
                },
                {
                    "month": 3,
                    "day": 14,
                    "scripture": "Deuteronomy 25-27; Galatians 5"
                },
                {
                    "month": 3,
                    "day": 15,
                    "scripture": "Deuteronomy 28-29; Galatians 6"
                },
                {
                    "month": 3,
                    "day": 16,
                    "scripture": "Deuteronomy 30-31; Psalms 40; 1 Corinthians 1"
                },
                {
                    "month": 3,
                    "day": 17,
                    "scripture": "Deuteronomy 32-34; 1 Corinthians 2"
                },
                {
                    "month": 3,
                    "day": 18,
                    "scripture": "Joshua 1-2; Psalms 37; 1 Corinthians 3"
                },
                {
                    "month": 3,
                    "day": 19,
                    "scripture": "Joshua 3-6; 1 Corinthians 4"
                },
                {
                    "month": 3,
                    "day": 20,
                    "scripture": "Joshua 7-8; Psalms 69; 1 Corinthians 5"
                },
                {
                    "month": 3,
                    "day": 21,
                    "scripture": "Joshua 9-11; 1 Corinthians 6"
                },
                {
                    "month": 3,
                    "day": 22,
                    "scripture": "Joshua 12-14; 1 Corinthians 7"
                },
                {
                    "month": 3,
                    "day": 23,
                    "scripture": "Joshua 15-17; 1 Corinthians 8"
                },
                {
                    "month": 3,
                    "day": 24,
                    "scripture": "Joshua 18-20; 1 Corinthians 9"
                },
                {
                    "month": 3,
                    "day": 25,
                    "scripture": "Joshua 21-22; Psalms 47; 1 Corinthians 10"
                },
                {
                    "month": 3,
                    "day": 26,
                    "scripture": "Joshua 23-24; Psalms 44; 1 Corinthians 11"
                },
                {
                    "month": 3,
                    "day": 27,
                    "scripture": "Judges 1-3; 1 Corinthians 12"
                },
                {
                    "month": 3,
                    "day": 28,
                    "scripture": "Judges 4-5; Psalms 39, 41; 1 Corinthians 13"
                },
                {
                    "month": 3,
                    "day": 29,
                    "scripture": "Judges 6-7; Psalms 52; 1 Corinthians 14"
                },
                {
                    "month": 3,
                    "day": 30,
                    "scripture": "Judges 8; Psalms 42; 1 Corinthians 15"
                },
                {
                    "month": 3,
                    "day": 31,
                    "scripture": "Judges 9-10; Psalms 49; 1 Corinthians 16"
                },
                {
                    "month": 4,
                    "day": 1,
                    "scripture": "Judges 11-12; Psalms 50; 2 Corinthians 1"
                },
                {
                    "month": 4,
                    "day": 2,
                    "scripture": "Judges 13-16; 2 Corinthians 2"
                },
                {
                    "month": 4,
                    "day": 3,
                    "scripture": "Judges 17-18; Psalms 89; 2 Corinthians 3"
                },
                {
                    "month": 4,
                    "day": 4,
                    "scripture": "Judges 19-21; 2 Corinthians 4"
                },
                {
                    "month": 4,
                    "day": 5,
                    "scripture": "Ruth 1-2; Psalms 53, 61; 2 Corinthians 5"
                },
                {
                    "month": 4,
                    "day": 6,
                    "scripture": "Ruth 3-4; Psalms 64-65; 2 Corinthians 6"
                },
                {
                    "month": 4,
                    "day": 7,
                    "scripture": "1 Samuel 1-2; Psalms 66; 2 Corinthians 7"
                },
                {
                    "month": 4,
                    "day": 8,
                    "scripture": "1 Samuel 3-5; Psalms 77; 2 Corinthians 8"
                },
                {
                    "month": 4,
                    "day": 9,
                    "scripture": "1 Samuel 6-7; Psalms 72; 2 Corinthians 9"
                },
                {
                    "month": 4,
                    "day": 10,
                    "scripture": "1 Samuel 8-10; 2 Corinthians 10"
                },
                {
                    "month": 4,
                    "day": 11,
                    "scripture": "1 Samuel 11-12; 1 Chronicles 1; 2 Corinthians 11"
                },
                {
                    "month": 4,
                    "day": 12,
                    "scripture": "1 Samuel 13; 1 Chronicles 2-3; 2 Corinthians 12"
                },
                {
                    "month": 4,
                    "day": 13,
                    "scripture": "1 Samuel 14; 1 Chronicles 4; 2 Corinthians 13"
                },
                {
                    "month": 4,
                    "day": 14,
                    "scripture": "1 Samuel 15-16; 1 Chronicles 5; Matthew 1"
                },
                {
                    "month": 4,
                    "day": 15,
                    "scripture": "1 Samuel 17; Psalms 9; Matthew 2"
                },
                {
                    "month": 4,
                    "day": 16,
                    "scripture": "1 Samuel 18; 1 Chronicles 6; Psalms 11; Matthew 3"
                },
                {
                    "month": 4,
                    "day": 17,
                    "scripture": "1 Samuel 19; 1 Chronicles 7; Psalms 59; Matthew 4"
                },
                {
                    "month": 4,
                    "day": 18,
                    "scripture": "1 Samuel 20-21; Psalms 34; Matthew 5"
                },
                {
                    "month": 4,
                    "day": 19,
                    "scripture": "1 Samuel 22; Psalms 17, 35; Matthew 6"
                },
                {
                    "month": 4,
                    "day": 20,
                    "scripture": "1 Samuel 23; Psalms 31, 54; Matthew 7"
                },
                {
                    "month": 4,
                    "day": 21,
                    "scripture": "1 Samuel 24; Psalms 57-58; 1 Chronicles 8; Matthew 8"
                },
                {
                    "month": 4,
                    "day": 22,
                    "scripture": "1 Samuel 25-26; Psalms 63; Matthew 9"
                },
                {
                    "month": 4,
                    "day": 23,
                    "scripture": "1 Samuel 27; Psalms 141; 1 Chronicles 9; Matthew 10"
                },
                {
                    "month": 4,
                    "day": 24,
                    "scripture": "1 Samuel 28-29; Psalms 109; Matthew 11"
                },
                {
                    "month": 4,
                    "day": 25,
                    "scripture": "1 Samuel 30-31; 1 Chronicles 10; Matthew 12"
                },
                {
                    "month": 4,
                    "day": 26,
                    "scripture": "2 Samuel 1; Psalms 140; Matthew 13"
                },
                {
                    "month": 4,
                    "day": 27,
                    "scripture": "2 Samuel 2; 1 Chronicles 11; Psalms 142; Matthew 14"
                },
                {
                    "month": 4,
                    "day": 28,
                    "scripture": "2 Samuel 3; 1 Chronicles 12; Matthew 15"
                },
                {
                    "month": 4,
                    "day": 29,
                    "scripture": "2 Samuel 4-5; Psalms 139; Matthew 16"
                },
                {
                    "month": 4,
                    "day": 30,
                    "scripture": "2 Samuel 6; 1 Chronicles 13; Psalms 68; Matthew 17"
                },
                {
                    "month": 5,
                    "day": 1,
                    "scripture": "1 Chronicles 14-15; Psalms 132; Matthew 18"
                },
                {
                    "month": 5,
                    "day": 2,
                    "scripture": "1 Chronicles 16; Psalms 106; Matthew 19"
                },
                {
                    "month": 5,
                    "day": 3,
                    "scripture": "2 Samuel 7; 1 Chronicles 17; Psalms 2; Matthew 20"
                },
                {
                    "month": 5,
                    "day": 4,
                    "scripture": "2 Samuel 8-9; 1 Chronicles 18-19; Matthew 21"
                },
                {
                    "month": 5,
                    "day": 5,
                    "scripture": "2 Samuel 10; 1 Chronicles 20; Psalms 20; Matthew 22"
                },
                {
                    "month": 5,
                    "day": 6,
                    "scripture": "2 Samuel 11-12; Psalms 51; Matthew 23"
                },
                {
                    "month": 5,
                    "day": 7,
                    "scripture": "2 Samuel 13-14; Matthew 24"
                },
                {
                    "month": 5,
                    "day": 8,
                    "scripture": "2 Samuel 15-16; Psalms 32; Matthew 25"
                },
                {
                    "month": 5,
                    "day": 9,
                    "scripture": "2 Samuel 17; Psalms 71; Matthew 26"
                },
                {
                    "month": 5,
                    "day": 10,
                    "scripture": "2 Samuel 18; Psalms 56; Matthew 27"
                },
                {
                    "month": 5,
                    "day": 11,
                    "scripture": "2 Samuel 19-20; Psalms 55; Matthew 28"
                },
                {
                    "month": 5,
                    "day": 12,
                    "scripture": "2 Samuel 21-23; 1 Thessalonians 1"
                },
                {
                    "month": 5,
                    "day": 13,
                    "scripture": "2 Samuel 24; 1 Chronicles 21; Psalms 30; 1 Thessalonians 2"
                },
                {
                    "month": 5,
                    "day": 14,
                    "scripture": "1 Chronicles 22-24; 1 Thessalonians 3"
                },
                {
                    "month": 5,
                    "day": 15,
                    "scripture": "1 Chronicles 25-27; 1 Thessalonians 4"
                },
                {
                    "month": 5,
                    "day": 16,
                    "scripture": "1 Kings 1; 1 Chronicles 28; Psalms 91; 1 Thessalonians 5"
                },
                {
                    "month": 5,
                    "day": 17,
                    "scripture": "1 Kings 2; 1 Chronicles 29; Psalms 95; 2 Thessalonians 1"
                },
                {
                    "month": 5,
                    "day": 18,
                    "scripture": "1 Kings 3; 2 Chronicles 1; Psalms 78; 2 Thessalonians 2"
                },
                {
                    "month": 5,
                    "day": 19,
                    "scripture": "1 Kings 4-5; 2 Chronicles 2; Psalms 101; 2 Thessalonians 3"
                },
                {
                    "month": 5,
                    "day": 20,
                    "scripture": "1 Kings 6; 2 Chronicles 3; Psalms 97; Romans 1"
                },
                {
                    "month": 5,
                    "day": 21,
                    "scripture": "1 Kings 7; 2 Chronicles 4; Psalms 98; Romans 2"
                },
                {
                    "month": 5,
                    "day": 22,
                    "scripture": "1 Kings 8; 2 Chronicles 5; Psalms 99; Romans 3"
                },
                {
                    "month": 5,
                    "day": 23,
                    "scripture": "2 Chronicles 6-7; Psalms 135; Romans 4"
                },
                {
                    "month": 5,
                    "day": 24,
                    "scripture": "1 Kings 9; 2 Chronicles 8; Psalms 136; Romans 5"
                },
                {
                    "month": 5,
                    "day": 25,
                    "scripture": "1 Kings 10-11; 2 Chronicles 9; Romans 6"
                },
                {
                    "month": 5,
                    "day": 26,
                    "scripture": "Proverbs 1-3; Romans 7"
                },
                {
                    "month": 5,
                    "day": 27,
                    "scripture": "Proverbs 4-6; Romans 8"
                },
                {
                    "month": 5,
                    "day": 28,
                    "scripture": "Proverbs 7-9; Romans 9"
                },
                {
                    "month": 5,
                    "day": 29,
                    "scripture": "Proverbs 10-12; Romans 10"
                },
                {
                    "month": 5,
                    "day": 30,
                    "scripture": "Proverbs 13-15; Romans 11"
                },
                {
                    "month": 5,
                    "day": 31,
                    "scripture": "Proverbs 16-18; Romans 12"
                },
                {
                    "month": 6,
                    "day": 1,
                    "scripture": "Proverbs 19-21; Romans 13"
                },
                {
                    "month": 6,
                    "day": 2,
                    "scripture": "Proverbs 22-24; Romans 14"
                },
                {
                    "month": 6,
                    "day": 3,
                    "scripture": "Proverbs 25-27; Romans 15"
                },
                {
                    "month": 6,
                    "day": 4,
                    "scripture": "Proverbs 28-29; Psalms 60; Romans 16"
                },
                {
                    "month": 6,
                    "day": 5,
                    "scripture": "Proverbs 30-31; Psalms 33; Ephesians 1"
                },
                {
                    "month": 6,
                    "day": 6,
                    "scripture": "Ecclesiastes 1-3; Psalms 45; Ephesians 2"
                },
                {
                    "month": 6,
                    "day": 7,
                    "scripture": "Ecclesiastes 4-6; Psalms 18; Ephesians 3"
                },
                {
                    "month": 6,
                    "day": 8,
                    "scripture": "Ecclesiastes 7-9; Ephesians 4"
                },
                {
                    "month": 6,
                    "day": 9,
                    "scripture": "Ecclesiastes 10-12; Psalms 94; Ephesians 5"
                },
                {
                    "month": 6,
                    "day": 10,
                    "scripture": "Song of Songs 1-4; Ephesians 6"
                },
                {
                    "month": 6,
                    "day": 11,
                    "scripture": "Song of Songs 5-8; Philippians 1"
                },
                {
                    "month": 6,
                    "day": 12,
                    "scripture": "1 Kings 12; 2 Chronicles 10-11; Philippians 2"
                },
                {
                    "month": 6,
                    "day": 13,
                    "scripture": "1 Kings 13-14; 2 Chronicles 12; Philippians 3"
                },
                {
                    "month": 6,
                    "day": 14,
                    "scripture": "1 Kings 15; 2 Chronicles 13-14; Philippians 4"
                },
                {
                    "month": 6,
                    "day": 15,
                    "scripture": "1 Kings 16; 2 Chronicles 15-16; Colossians 1"
                },
                {
                    "month": 6,
                    "day": 16,
                    "scripture": "1 Kings 17-19; Colossians 2"
                },
                {
                    "month": 6,
                    "day": 17,
                    "scripture": "1 Kings 20-21; 2 Chronicles 17; Colossians 3"
                },
                {
                    "month": 6,
                    "day": 18,
                    "scripture": "1 Kings 22; 2 Chronicles 18-19; Colossians 4"
                },
                {
                    "month": 6,
                    "day": 19,
                    "scripture": "2 Kings 1-3; Psalms 82; 1 Timothy 1"
                },
                {
                    "month": 6,
                    "day": 20,
                    "scripture": "2 Kings 4-5; Psalms 83; 1 Timothy 2"
                },
                {
                    "month": 6,
                    "day": 21,
                    "scripture": "2 Kings 6-7; 2 Chronicles 20; 1 Timothy 3"
                },
                {
                    "month": 6,
                    "day": 22,
                    "scripture": "2 Kings 8-9; 2 Chronicles 21; 1 Timothy 4"
                },
                {
                    "month": 6,
                    "day": 23,
                    "scripture": "2 Kings 10; 2 Chronicles 22-23; 1 Timothy 5"
                },
                {
                    "month": 6,
                    "day": 24,
                    "scripture": "2 Kings 11-12; 2 Chronicles 24; 1 Timothy 6"
                },
                {
                    "month": 6,
                    "day": 25,
                    "scripture": "Joel 1-3; 2 Timothy 1"
                },
                {
                    "month": 6,
                    "day": 26,
                    "scripture": "Jonah 1-4; 2 Timothy 2"
                },
                {
                    "month": 6,
                    "day": 27,
                    "scripture": "2 Kings 13-14; 2 Chronicles 25; 2 Timothy 3"
                },
                {
                    "month": 6,
                    "day": 28,
                    "scripture": "Amos 1-3; Psalms 80; 2 Timothy 4"
                },
                {
                    "month": 6,
                    "day": 29,
                    "scripture": "Amos 4-6; Psalms 86; Titus 1"
                },
                {
                    "month": 6,
                    "day": 30,
                    "scripture": "Amos 7-9; Psalms 104; Titus 2"
                },
                {
                    "month": 7,
                    "day": 1,
                    "scripture": "Isaiah 1-3; Titus 3"
                },
                {
                    "month": 7,
                    "day": 2,
                    "scripture": "Isaiah 4-5; Psalms 115-116; Jude"
                },
                {
                    "month": 7,
                    "day": 3,
                    "scripture": "Isaiah 6-7; 2 Chronicles 26-27; Philemon"
                },
                {
                    "month": 7,
                    "day": 4,
                    "scripture": "2 Kings 15-16; Hosea 1; Hebrews 1"
                },
                {
                    "month": 7,
                    "day": 5,
                    "scripture": "Hosea 2-5; Hebrews 2"
                },
                {
                    "month": 7,
                    "day": 6,
                    "scripture": "Hosea 6-9; Hebrews 3"
                },
                {
                    "month": 7,
                    "day": 7,
                    "scripture": "Hosea 10-12; Psalms 73 ; Hebrew 4"
                },
                {
                    "month": 7,
                    "day": 8,
                    "scripture": "Hosea 13-14; Psalms 100, 102; Hebrews 5"
                },
                {
                    "month": 7,
                    "day": 9,
                    "scripture": "Micah 1-4; Hebrews 6"
                },
                {
                    "month": 7,
                    "day": 10,
                    "scripture": "Micah 5-7; Hebrews 7"
                },
                {
                    "month": 7,
                    "day": 11,
                    "scripture": "Isaiah 8-10; Hebrews 8"
                },
                {
                    "month": 7,
                    "day": 12,
                    "scripture": "Isaiah 11-14; Hebrews 9"
                },
                {
                    "month": 7,
                    "day": 13,
                    "scripture": "Isaiah 15-18; Hebrews 10"
                },
                {
                    "month": 7,
                    "day": 14,
                    "scripture": "Isaiah 19-21; Hebrews 11"
                },
                {
                    "month": 7,
                    "day": 15,
                    "scripture": "Isaiah 22-24; Hebrews 12"
                },
                {
                    "month": 7,
                    "day": 16,
                    "scripture": "Isaiah 25-28; Hebrews 13"
                },
                {
                    "month": 7,
                    "day": 17,
                    "scripture": "Isaiah 29-31 ; James 1"
                },
                {
                    "month": 7,
                    "day": 18,
                    "scripture": "Isaiah 32-35; James 2"
                },
                {
                    "month": 7,
                    "day": 19,
                    "scripture": "2 Kings 17; 2 Chronicles 28; Psalms 46; James 3"
                },
                {
                    "month": 7,
                    "day": 20,
                    "scripture": "2 Chronicles 29-31; James 4"
                },
                {
                    "month": 7,
                    "day": 21,
                    "scripture": "2 Kings 18-19; 2 Chronicles 32; James 5"
                },
                {
                    "month": 7,
                    "day": 22,
                    "scripture": "Isaiah 36-37; Psalms 76 ; 1 Peter 1"
                },
                {
                    "month": 7,
                    "day": 23,
                    "scripture": "2 Kings 20; Isaiah 38-39; Psalms 75; 1 Peter 2"
                },
                {
                    "month": 7,
                    "day": 24,
                    "scripture": "Isaiah 40-42; 1 Peter 3"
                },
                {
                    "month": 7,
                    "day": 25,
                    "scripture": "Isaiah 43-45; 1 Peter 4"
                },
                {
                    "month": 7,
                    "day": 26,
                    "scripture": "Isaiah 46-49; 1 Peter 5"
                },
                {
                    "month": 7,
                    "day": 27,
                    "scripture": "Isaiah 50-52; Psalms 92; 2 Peter 1"
                },
                {
                    "month": 7,
                    "day": 28,
                    "scripture": "Isaiah 53-56; 2 Peter 2"
                },
                {
                    "month": 7,
                    "day": 29,
                    "scripture": "Isaiah 57-59; Psalms 103; 2 Peter 3"
                },
                {
                    "month": 7,
                    "day": 30,
                    "scripture": "Isaiah 60-62; John 1"
                },
                {
                    "month": 7,
                    "day": 31,
                    "scripture": "Isaiah 63-64; Psalms 107; John 2"
                },
                {
                    "month": 8,
                    "day": 1,
                    "scripture": "Isaiah 65-66; Psalms 62; John 3"
                },
                {
                    "month": 8,
                    "day": 2,
                    "scripture": "2 Kings 21; 2 Chronicles 33; John 4"
                },
                {
                    "month": 8,
                    "day": 3,
                    "scripture": "Nahum 1-3; John 5"
                },
                {
                    "month": 8,
                    "day": 4,
                    "scripture": "2 Kings 22; 2 Chronicles 34; John 6"
                },
                {
                    "month": 8,
                    "day": 5,
                    "scripture": "2 Kings 23; 2 Chronicles 35; John 7"
                },
                {
                    "month": 8,
                    "day": 6,
                    "scripture": "Habakkuk 1-3; John 8"
                },
                {
                    "month": 8,
                    "day": 7,
                    "scripture": "Zephaniah 1-3; John 9"
                },
                {
                    "month": 8,
                    "day": 8,
                    "scripture": "Jeremiah 1-2; John 10"
                },
                {
                    "month": 8,
                    "day": 9,
                    "scripture": "Jeremiah 3-4; John 11"
                },
                {
                    "month": 8,
                    "day": 10,
                    "scripture": "Jeremiah 5-6; John 12"
                },
                {
                    "month": 8,
                    "day": 11,
                    "scripture": "Jeremiah 7-9; John 13"
                },
                {
                    "month": 8,
                    "day": 12,
                    "scripture": "Jeremiah 10-12; John 14"
                },
                {
                    "month": 8,
                    "day": 13,
                    "scripture": "Jeremiah 13-15; John 15"
                },
                {
                    "month": 8,
                    "day": 14,
                    "scripture": "Jeremiah 16-17; Psalms 96; John 16"
                },
                {
                    "month": 8,
                    "day": 15,
                    "scripture": "Jeremiah 18-20; Psalms 93; John 17"
                },
                {
                    "month": 8,
                    "day": 16,
                    "scripture": "2 Kings 24; Jeremiah 22; Psalms 112; John 18"
                },
                {
                    "month": 8,
                    "day": 17,
                    "scripture": "Jeremiah 23, 25; John 19"
                },
                {
                    "month": 8,
                    "day": 18,
                    "scripture": "Jeremiah 26, 35-36; John 20"
                },
                {
                    "month": 8,
                    "day": 19,
                    "scripture": "Jeremiah 45-47; Psalms 105; John 21"
                },
                {
                    "month": 8,
                    "day": 20,
                    "scripture": "Jeremiah 48-49; Psalms 67; 1 John 1"
                },
                {
                    "month": 8,
                    "day": 21,
                    "scripture": "Jeremiah 21, 24, 27; Psalms 118; 1 John 2"
                },
                {
                    "month": 8,
                    "day": 22,
                    "scripture": "Jeremiah 28-30; 1 John 3"
                },
                {
                    "month": 8,
                    "day": 23,
                    "scripture": "Jeremiah 31-32; 1 John 4"
                },
                {
                    "month": 8,
                    "day": 24,
                    "scripture": "Jeremiah 33-34; Psalms 74; 1 John 5"
                },
                {
                    "month": 8,
                    "day": 25,
                    "scripture": "Jeremiah 37-39; Psalms 79; 2 John"
                },
                {
                    "month": 8,
                    "day": 26,
                    "scripture": "Jeremiah 50-51; 3 John"
                },
                {
                    "month": 8,
                    "day": 27,
                    "scripture": "Jeremiah 52; Revelation 1; Psalms 143-144"
                },
                {
                    "month": 8,
                    "day": 28,
                    "scripture": "Ezekiel 1-3; Revelation 2"
                },
                {
                    "month": 8,
                    "day": 29,
                    "scripture": "Ezekiel 4-7; Revelation 3"
                },
                {
                    "month": 8,
                    "day": 30,
                    "scripture": "Ezekiel 8-11; Revelation 4"
                },
                {
                    "month": 8,
                    "day": 31,
                    "scripture": "Ezekiel 12-14; Revelation 5"
                },
                {
                    "month": 9,
                    "day": 1,
                    "scripture": "Ezekiel 15-16; Psalms 70; Revelation 6"
                },
                {
                    "month": 9,
                    "day": 2,
                    "scripture": "Ezekiel 17-19; Revelation 7"
                },
                {
                    "month": 9,
                    "day": 3,
                    "scripture": "Ezekiel 20-21; Psalms 111; Revelation 8"
                },
                {
                    "month": 9,
                    "day": 4,
                    "scripture": "Ezekiel 22-24; Revelation 9"
                },
                {
                    "month": 9,
                    "day": 5,
                    "scripture": "Ezekiel 25-28; Revelation 10"
                },
                {
                    "month": 9,
                    "day": 6,
                    "scripture": "Ezekiel 29-32; Revelation 11"
                },
                {
                    "month": 9,
                    "day": 7,
                    "scripture": "2 Kings 25; 2 Chronicles 36; Jeremiah 40-41; Revelation 12"
                },
                {
                    "month": 9,
                    "day": 8,
                    "scripture": "Jeremiah 42-44; Psalms 48; Revelation 13"
                },
                {
                    "month": 9,
                    "day": 9,
                    "scripture": "Lamentations 1-2; Obadiah; Revelation 14"
                },
                {
                    "month": 9,
                    "day": 10,
                    "scripture": "Lamentations 3-5; Revelation 15"
                },
                {
                    "month": 9,
                    "day": 11,
                    "scripture": "Daniel 1-2; Revelation 16"
                },
                {
                    "month": 9,
                    "day": 12,
                    "scripture": "Daniel 3-4; Psalms 81; Revelation 17"
                },
                {
                    "month": 9,
                    "day": 13,
                    "scripture": "Ezekiel 33-35; Revelation 18"
                },
                {
                    "month": 9,
                    "day": 14,
                    "scripture": "Ezekiel 36-37; Psalms 110; Revelation 19"
                },
                {
                    "month": 9,
                    "day": 15,
                    "scripture": "Ezekiel 38-39; Psalms 145; Revelation 20"
                },
                {
                    "month": 9,
                    "day": 16,
                    "scripture": "Ezekiel 40-41; Psalms 128; Revelation 21"
                },
                {
                    "month": 9,
                    "day": 17,
                    "scripture": "Ezekiel 42-44; Revelation 22"
                },
                {
                    "month": 9,
                    "day": 18,
                    "scripture": "Ezekiel 45-46; Luke 1"
                },
                {
                    "month": 9,
                    "day": 19,
                    "scripture": "Ezekiel 47-48; Luke 2"
                },
                {
                    "month": 9,
                    "day": 20,
                    "scripture": "Daniel 5-6; Psalms 130; Luke 3"
                },
                {
                    "month": 9,
                    "day": 21,
                    "scripture": "Daniel 7-8; Psalms 137; Luke 4"
                },
                {
                    "month": 9,
                    "day": 22,
                    "scripture": "Daniel 9-10; Psalms 123; Luke 5"
                },
                {
                    "month": 9,
                    "day": 23,
                    "scripture": "Daniel 11-12; Luke 6"
                },
                {
                    "month": 9,
                    "day": 24,
                    "scripture": "Ezra 1; Psalms 84-85; Luke 7"
                },
                {
                    "month": 9,
                    "day": 25,
                    "scripture": "Ezra 2-3; Luke 8"
                },
                {
                    "month": 9,
                    "day": 26,
                    "scripture": "Ezra 4; Psalms 113, 127; Luke 9"
                },
                {
                    "month": 9,
                    "day": 27,
                    "scripture": "Haggai 1-2; Psalms 129; Luke 10"
                },
                {
                    "month": 9,
                    "day": 28,
                    "scripture": "Zechariah 1-3; Luke 11"
                },
                {
                    "month": 9,
                    "day": 29,
                    "scripture": "Zechariah 4-6; Luke 12"
                },
                {
                    "month": 9,
                    "day": 30,
                    "scripture": "Zechariah 7-9; Luke 13"
                },
                {
                    "month": 10,
                    "day": 1,
                    "scripture": "Zechariah 10-12; Psalms 126; Luke 14"
                },
                {
                    "month": 10,
                    "day": 2,
                    "scripture": "Zechariah 13-14; Psalms 147; Luke 15"
                },
                {
                    "month": 10,
                    "day": 3,
                    "scripture": "Ezra 5-6; Psalms 138; Luke 16"
                },
                {
                    "month": 10,
                    "day": 4,
                    "scripture": "Esther 1-2; Psalms 150; Luke 17"
                },
                {
                    "month": 10,
                    "day": 5,
                    "scripture": "Esther 3-8; Luke 18"
                },
                {
                    "month": 10,
                    "day": 6,
                    "scripture": "Esther 9-10; Luke 19"
                },
                {
                    "month": 10,
                    "day": 7,
                    "scripture": "Ezra 7-8; Luke 20"
                },
                {
                    "month": 10,
                    "day": 8,
                    "scripture": "Ezra 9-10; Psalms 131; Luke 21"
                },
                {
                    "month": 10,
                    "day": 9,
                    "scripture": "Nehemiah 1-2; Psalms 133; Luke 22"
                },
                {
                    "month": 10,
                    "day": 10,
                    "scripture": "Nehemiah 3-4; Luke 23"
                },
                {
                    "month": 10,
                    "day": 11,
                    "scripture": "Nehemiah 5-6; Psalms 146; Luke 24"
                },
                {
                    "month": 10,
                    "day": 12,
                    "scripture": "Nehemiah 7-8; Acts 1"
                },
                {
                    "month": 10,
                    "day": 13,
                    "scripture": "Nehemiah 9-10; Acts 2"
                },
                {
                    "month": 10,
                    "day": 14,
                    "scripture": "Nehemiah 11-12; Psalms 1; Acts 3"
                },
                {
                    "month": 10,
                    "day": 15,
                    "scripture": "Nehemiah 13; Malachi 1-2; Acts 4"
                },
                {
                    "month": 10,
                    "day": 16,
                    "scripture": "Malachi 3-4; Psalms 148; Acts 5"
                },
                {
                    "month": 10,
                    "day": 17,
                    "scripture": "Job 1-2; Acts 6-7"
                },
                {
                    "month": 10,
                    "day": 18,
                    "scripture": "Job 3-4; Acts 8-9"
                },
                {
                    "month": 10,
                    "day": 19,
                    "scripture": "Job 5; Psalms 108; Acts 10-11"
                },
                {
                    "month": 10,
                    "day": 20,
                    "scripture": "Job 6-8; Acts 12"
                },
                {
                    "month": 10,
                    "day": 21,
                    "scripture": "Job 9-10; Acts 13-14"
                },
                {
                    "month": 10,
                    "day": 22,
                    "scripture": "Job 11-12; Acts 15-16"
                },
                {
                    "month": 10,
                    "day": 23,
                    "scripture": "Job 13-14; Acts 17-18"
                },
                {
                    "month": 10,
                    "day": 24,
                    "scripture": "Job 15; Acts 19-20"
                },
                {
                    "month": 10,
                    "day": 25,
                    "scripture": "Job 16; Acts 21-23"
                },
                {
                    "month": 10,
                    "day": 26,
                    "scripture": "Job 17; Acts 24-26"
                },
                {
                    "month": 10,
                    "day": 27,
                    "scripture": "Job 18; Psalms 114; Acts 27-28"
                },
                {
                    "month": 10,
                    "day": 28,
                    "scripture": "Job 19; Mark 1-2"
                },
                {
                    "month": 10,
                    "day": 29,
                    "scripture": "Job 20; Mark 3-4"
                },
                {
                    "month": 10,
                    "day": 30,
                    "scripture": "Job 21; Mark 5-6"
                },
                {
                    "month": 10,
                    "day": 31,
                    "scripture": "Job 22; Mark 7-8"
                },
                {
                    "month": 11,
                    "day": 1,
                    "scripture": "Psalms 121; Mark 9-10"
                },
                {
                    "month": 11,
                    "day": 2,
                    "scripture": "Job 23-24; Mark 11-12"
                },
                {
                    "month": 11,
                    "day": 3,
                    "scripture": "Job 25; Mark 13-14"
                },
                {
                    "month": 11,
                    "day": 4,
                    "scripture": "Job 26-27; Mark 15-16"
                },
                {
                    "month": 11,
                    "day": 5,
                    "scripture": "Job 28-29; Galatians 1-2"
                },
                {
                    "month": 11,
                    "day": 6,
                    "scripture": "Job 30; Psalms 120; Galatians 3-4"
                },
                {
                    "month": 11,
                    "day": 7,
                    "scripture": "Job 31-32; Galatians 5-6"
                },
                {
                    "month": 11,
                    "day": 8,
                    "scripture": "Job 33; 1 Corinthians 1-3"
                },
                {
                    "month": 11,
                    "day": 9,
                    "scripture": "Job 34; 1 Corinthians 4-6"
                },
                {
                    "month": 11,
                    "day": 10,
                    "scripture": "Job 35-36; 1 Corinthians 7-8"
                },
                {
                    "month": 11,
                    "day": 11,
                    "scripture": "Psalms 122; 1 Corinthians 9-11"
                },
                {
                    "month": 11,
                    "day": 12,
                    "scripture": "Job 37-38; 1 Corinthians 12"
                },
                {
                    "month": 11,
                    "day": 13,
                    "scripture": "Job 39-40; 1 Corinthians 13-14"
                },
                {
                    "month": 11,
                    "day": 14,
                    "scripture": "Psalms 149; 1 Corinthians 15-16"
                },
                {
                    "month": 11,
                    "day": 15,
                    "scripture": "Job 41-42; 2 Corinthians 1-2"
                },
                {
                    "month": 11,
                    "day": 16,
                    "scripture": "2 Corinthians 3-6"
                },
                {
                    "month": 11,
                    "day": 17,
                    "scripture": "2 Corinthians 7-10"
                },
                {
                    "month": 11,
                    "day": 18,
                    "scripture": "Psalms 124; 2 Corinthians 11-13"
                },
                {
                    "month": 11,
                    "day": 19,
                    "scripture": "Matthew 1-4"
                },
                {
                    "month": 11,
                    "day": 20,
                    "scripture": "Matthew 5-7"
                },
                {
                    "month": 11,
                    "day": 21,
                    "scripture": "Matthew 8-10"
                },
                {
                    "month": 11,
                    "day": 22,
                    "scripture": "Matthew 11-13"
                },
                {
                    "month": 11,
                    "day": 23,
                    "scripture": "Matthew 14-16"
                },
                {
                    "month": 11,
                    "day": 24,
                    "scripture": "Matthew 17-19"
                },
                {
                    "month": 11,
                    "day": 25,
                    "scripture": "Matthew 20-22"
                },
                {
                    "month": 11,
                    "day": 26,
                    "scripture": "Matthew 23-25"
                },
                {
                    "month": 11,
                    "day": 27,
                    "scripture": "Psalms 125; Matthew 26-27"
                },
                {
                    "month": 11,
                    "day": 28,
                    "scripture": "Matthew 28; 1 Thessalonians 1-3"
                },
                {
                    "month": 11,
                    "day": 29,
                    "scripture": "1 Thessalonians 4-5; 2 Thessalonians 1-3"
                },
                {
                    "month": 11,
                    "day": 30,
                    "scripture": "Romans 1-4"
                },
                {
                    "month": 12,
                    "day": 1,
                    "scripture": "Romans 5-8"
                },
                {
                    "month": 12,
                    "day": 2,
                    "scripture": "Romans 9-12"
                },
                {
                    "month": 12,
                    "day": 3,
                    "scripture": "Romans 13-16"
                },
                {
                    "month": 12,
                    "day": 4,
                    "scripture": "Ephesians 1-4"
                },
                {
                    "month": 12,
                    "day": 5,
                    "scripture": "Ephesians 5-6; Psalms 119:1-80"
                },
                {
                    "month": 12,
                    "day": 6,
                    "scripture": "Philippians 1-4"
                },
                {
                    "month": 12,
                    "day": 7,
                    "scripture": "Colossians 1-4"
                },
                {
                    "month": 12,
                    "day": 8,
                    "scripture": "1 Timothy 1-4"
                },
                {
                    "month": 12,
                    "day": 9,
                    "scripture": "1 Timothy 5-6; Titus 1-3"
                },
                {
                    "month": 12,
                    "day": 10,
                    "scripture": "2 Timothy 1-4"
                },
                {
                    "month": 12,
                    "day": 11,
                    "scripture": "Philemon; Hebrews 1-4"
                },
                {
                    "month": 12,
                    "day": 12,
                    "scripture": "Hebrews 5-8"
                },
                {
                    "month": 12,
                    "day": 13,
                    "scripture": "Hebrews 9-11"
                },
                {
                    "month": 12,
                    "day": 14,
                    "scripture": "Hebrews 12-13; Jude"
                },
                {
                    "month": 12,
                    "day": 15,
                    "scripture": "James 1-5"
                },
                {
                    "month": 12,
                    "day": 16,
                    "scripture": "1 Peter 1-5"
                },
                {
                    "month": 12,
                    "day": 17,
                    "scripture": "2 Peter 1-3; John 1"
                },
                {
                    "month": 12,
                    "day": 18,
                    "scripture": "John 2-4"
                },
                {
                    "month": 12,
                    "day": 19,
                    "scripture": "John 5-6"
                },
                {
                    "month": 12,
                    "day": 20,
                    "scripture": "John 7-8"
                },
                {
                    "month": 12,
                    "day": 21,
                    "scripture": "John 9-11"
                },
                {
                    "month": 12,
                    "day": 22,
                    "scripture": "John 12-14"
                },
                {
                    "month": 12,
                    "day": 23,
                    "scripture": "John 15-18"
                },
                {
                    "month": 12,
                    "day": 24,
                    "scripture": "John 19-21"
                },
                {
                    "month": 12,
                    "day": 25,
                    "scripture": "1 John 1-5"
                },
                {
                    "month": 12,
                    "day": 26,
                    "scripture": "Psalms 117, 119:81-176; 2 John; 3 John"
                },
                {
                    "month": 12,
                    "day": 27,
                    "scripture": "Revelation 1-4"
                },
                {
                    "month": 12,
                    "day": 28,
                    "scripture": "Revelation 5-9"
                },
                {
                    "month": 12,
                    "day": 29,
                    "scripture": "Revelation 10-14"
                },
                {
                    "month": 12,
                    "day": 30,
                    "scripture": "Revelation 15-18"
                },
                {
                    "month": 12,
                    "day": 31,
                    "scripture": "Revelation 19-22"
                }
            ]
        }

        static GetCompactScripture(month, day)
        {
            let csData = this.CompactScripture();
            let cs = _.find(csData, { 'month': month, 'day': day });

            return cs.scripture;
        }

        static GetCompleteScripture(month, day)
        {
            let csData = this.CompleteScripture();
            let cs = _.find(csData, { 'month': month, 'day': day });

            return cs.scripture;
        }
    }

    return {
        Static: Static
    };

})();
